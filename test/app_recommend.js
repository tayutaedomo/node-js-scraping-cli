var assert = require('assert');
var Recommend = require('./../app/recommend');

describe('Recommend', function() {
    var recommend;

    beforeEach(function() {
        recommend = new Recommend();
    });

    describe('get', function() {
        it('returns correct response', function() {
            var url = 'http://ncode.syosetu.com/n6316bn/';
            recommend.get(url, function(data){
                assert.notEqual(data[0]['title'], null);
            });
        });
    });
});

