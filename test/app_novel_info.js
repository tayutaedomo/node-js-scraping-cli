var assert = require('assert');
var NovelInfo = require('./../app/novel_info');

describe('NovelInfo', function() {
    var novelInfo;

    beforeEach(function() {
        novelInfo = new NovelInfo();
    });

    describe('get', function() {
        it('returns correct response', function() {
            var url = 'http://ncode.syosetu.com/novelview/infotop/ncode/n6316bn/';
            novelInfo.get(url, function(data){
                assert.equal(data['url'], url);
            });
        });
    });
});

