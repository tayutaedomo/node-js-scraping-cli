#!/usr/bin/env node

'use strict';

var client = require('cheerio-httpcli');

var requestUrl = "http://ncode.syosetu.com/n6316bn/";
var recommends = [];

client.fetch(requestUrl)
    .then(function (result) {
        result.$('.recommend_novel').each(function(index, element){
            recommends.push(extract_recommend_data(result.$, element));
        });
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        console.log(recommends);
    });



function extract_recommend_data($, element) {
    var data = {};
    data['url'] = $(element).find('a').attr('href');
    data['title'] = $(element).find('a .reconovel_title').text();

    $(element).find('li').each(function(index, element){
        switch (index) {
            case 0:
                var matches = $(element).text().match(/.+/);
                data['category'] = matches[1];
                break;

            case 1:
                var matches = $(element).text().match(/(.+)\(全(\d+)部\)/);
                data['state'] = matches[1];
                data['page_count'] = matches[2];
                break;

            case 2:
                var matches = $(element).text().match(/(\d+) user/);
                data['bookmark_count'] = matches[1];
                break;

            case 3:
                var matches = $(element).text().match(/最終掲載日：(.+)/)
                data['last_updated_at'] = matches[1];
        }
    });

    return data;
}

