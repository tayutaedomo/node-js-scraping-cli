#!/usr/bin/env node

'use strict';

var client = require('cheerio-httpcli');

var NovelInfo = function() {
    return {
        get: function(url, callback) {
            var novel = {};

            client.fetch(url)
                .then(function (result) {
                    novel = extract_novel_detail(result.$);
                })
                .catch(function (err) {
                    console.log(err);
                })
                .finally(function () {
                    callback(novel);
                });
        }
    };

    function extract_novel_detail($) {
        var data = {};

        data['title'] = $('h1 a').text();
        data['url'] = $('h1 a').attr('href');

        var matches = $('#pre_info').text().match(/(連載中|完結済)全(\d+)部/);
        data['state'] = matches[1];
        data['page_count'] = matches[2];

        $('#noveltable1 td').each(function(index, element){
            switch (index) {
                case 0:
                    data['outline'] = $(element).text();
                    break;

                case 1:
                    var target = $(element).find('a');
                    data['author'] = target.text();
                    var matches = target.attr('href').match(/(\d+)/);
                    data['author_id'] = matches[1];
                    break;

                case 2:
                    data['keywords'] = $(element).text().replace(/\n/g, '').replace(/\s/g, ',');
                    break;

                case 3:
                    var matches = $(element).text().match(/.+/);
                    data['category'] = matches[0];
                    break;
            }
        });

        $('#noveltable2 td').each(function(index, element){
            switch (index) {
                case 0:
                    data['published_at'] = $(element).text();
                    break;

                case 1:
                    data['last_published_at'] = $(element).text();
                    break;

                case 2:
                    var matches = $(element).text().match(/([\d,]+)/);
                    data['impression_count'] = matches[1].replace(/,/g, '');
                    break;

                case 3:
                    var matches = $(element).text().match(/([\d,]+)/);
                    data['review_count'] = matches[1].replace(/,/g, '');
                    break;

                case 4:
                    var matches = $(element).text().match(/([\d,]+)/);
                    data['bookmark_count'] = matches[1].replace(/,/g, '');
                    break;

                case 5:
                    var matches = $(element).text().match(/([\d,]+)/);
                    data['total_rating'] = matches[1].replace(/,/g, '');
                    break;

                case 6:
                    var matches = $(element).text().match(/([\d,]+)pt/g);
                    data['composition_rating'] = matches[0].replace(/[,pt]/g, '');
                    data['story_rating'] = matches[1].replace(/[,pt]/g, '');
                    break;

                case 8:
                    var matches = $(element).text().match(/([\d,]+)/);
                    data['total_rating'] = matches[1].replace(/,/g, '');
                    break;
            }
        });

        return data;
    }
};


if (require.main === module) {
    var url = "http://ncode.syosetu.com/novelview/infotop/ncode/n6316bn/";

    var novelInfo = new NovelInfo();
    novelInfo.get(url, function(data) {
        console.log(data);
    });
}

