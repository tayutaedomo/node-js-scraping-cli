var assert = require('assert');
var NovelTop = require('./../app/novel_top');

//var nockBack = require('nock').back;
//nockBack.fixtures = __dirname + '/fixtures';
//nockBack.setMode('record');
//var request = require('request');
//nockBack('syosetu_n6316bn.json', function(nockDone) {
//    request.get('http://ncode.syosetu.com/n6316bn/', function(err, res, body) {
//        nockDone();
//    });
//});
//var nock = require('nock');
//nock('http://ncode.syosetu.com')
//    .get('/n6316bn/')
//    .replyWithFile(200, __dirname + '/fixtures/syosetu_n6316bn.html');

describe('NovelTop', function() {
    var novelTop;

    beforeEach(function() {
        novelTop = new NovelTop();
    });

    describe('get', function() {
        it('returns correct response', function(done) {
            var url = 'http://ncode.syosetu.com/n6316bn/';
            novelTop.get(url, function(data){
                assert.equal(data['url'], url);
                done();
            });
        });
    });
});

