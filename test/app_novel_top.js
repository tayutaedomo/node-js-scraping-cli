var assert = require('assert');
var NovelTop = require('./../app/novel_top');

describe('NovelTop', function() {
    var novelTop;

    beforeEach(function() {
        novelTop = new NovelTop();
    });

    describe('get', function() {
        it('returns correct response', function() {
            var url = 'http://ncode.syosetu.com/n6316bn/';
            novelTop.get(url, function(data){
                assert.equal(data['url'], url);
            });
        });
    });
});

