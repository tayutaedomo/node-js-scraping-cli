#!/usr/bin/env node

'use strict';

var client = require('cheerio-httpcli');

var NovelTop = function() {
    return {
        get: function(url, callback) {
            var novel = {};

            client.fetch(url)
                .then(function (result) {
                    novel = extract_novel_top(result.$);
                })
                .catch(function (err) {
                    console.log(err);
                })
                .finally(function () {
                    novel['url'] = url;
                    callback(novel);
                });
        }
    };

    function extract_novel_top($) {
        var data = {};

        data['title'] = $('.novel_title').text();
        data['author'] = $('.novel_writername a').text();
        var matches = $('.novel_writername a').attr('href').match(/(\d+)/);
        data['author'] = matches[1];
        data['outline'] = $('#novel_ex').text();

        var links = [];
        $('.subtitle a').each(function(index, element){
            links.push({
                title: $(element).text(),
                url: $(element).attr('href')
            });
        });

        data['links'] = links;

        return data;
    }
};

module.exports = NovelTop;


if (require.main === module) {
    var url = "http://ncode.syosetu.com/n6316bn/";

    var novelTop = new NovelTop();
    novelTop.get(url, function(data){
        console.log(data);
    });
}

