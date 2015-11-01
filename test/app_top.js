var assert = require('assert');
var Top = require('./../app/top.js');

var nock = require('nock');
nock('http://syosetu.com').get('/').replyWithFile(200, __dirname + '/fixtures/syosetu.com.html');

//var nockBack = require('nock').back;
//nockBack.fixtures = __dirname + '/fixtures';
//nockBack.setMode('lockdown');
//nockBack.setMode('record');
//nockBack('syosetu.com.json', function(nockDone) {
//    request.get('http://syosetu.com/', function(err, res, body) {
//        nockDone();
//    });
//});

describe('Top', function() {
    var top;

    beforeEach(function() {
        top = new Top;
    });

    describe('get', function() {
        it('returns correct response', function(done) {
            top.get('http://syosetu.com/', function(data) {
                assert.equal(data['url'], 'http://syosetu.com/');
                assert.notEqual(data['title'], undefined);
                done();
            });
        });
    });
});

