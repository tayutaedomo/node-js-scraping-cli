#!/usr/bin/env node

'use strict';

var client = require('cheerio-httpcli');
var models = require('../models');

var Recommend = function() {
    return {
        get: function(url, callback) {
            var data = [];

            client.fetch(url)
                .then(function (result) {
                    result.$('.recommend_novel').each(function(index, element){
                        data.push(extract_recommend_data(result.$, element));
                    });
                })
                .catch(function (err) {
                    console.log(err);
                })
                .finally(function () {
                    callback(data);
                });
        },
        store: function(url, callback) {
            this.get(url, function(data) {
                var ncode_list = [];
                data.forEach(function(recommend) {
                    var values = {
                        ncode: recommend['ncode'],
                        url: recommend['url'],
                        title: recommend['title'],
                        category: recommend['category'],
                        state: recommend['state'],
                        pageCount: recommend['pageCount'],
                        bookmarkCount: recommend['bookmarkCount'],
                        lastPublishedAt: Date.parse(recommend['lastPublishedAt'] + '+09:00')
                    };
                    if (models.Novel.upsert(values)) {
                        ncode_list.push(recommend['ncode']);
                    }
                });
                callback(ncode_list);
            });
        }
    };

    function extract_recommend_data($, element) {
        var data = {};

        var matches = $(element).find('a').attr('href').match(/\/(n[0-9a-z]+)\//);
        data['ncode'] = matches[1];

        data['url'] = $(element).find('a').attr('href');
        data['title'] = $(element).find('a .reconovel_title').text();

        $(element).find('li').each(function(index, element){
            switch (index) {
                case 0:
                    var matches = $(element).text().match(/.+/);
                    data['category'] = matches[0];
                    break;

                case 1:
                    var matches = $(element).text().match(/(.+)\(全(\d+)部\)/);
                    data['state'] = matches[1];
                    data['pageCount'] = matches[2];
                    break;

                case 2:
                    var matches = $(element).text().match(/(\d+) user/);
                    data['bookmarkCount'] = matches[1];
                    break;

                case 3:
                    var matches = $(element).text().match(/最終掲載日：(.+)/)
                    data['lastPublishedAt'] = matches[1];
            }
        });

        return data;
    }
};

module.exports = Recommend;


if (require.main === module) {
    var url = "http://ncode.syosetu.com/n6316bn/";
    var recommend = new Recommend();

    //recommend.get(url, function(data){
    //    console.log(data);
    //});
    recommend.store(url, function(data) {
        console.log(data);
    });
}

