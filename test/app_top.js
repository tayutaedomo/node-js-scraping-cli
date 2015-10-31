var assert = require('assert');
var Top = require('./../app/top.js');

describe('Top', function(){
    var top;

    beforeEach(function() {
        top = new Top;
    });

    describe('get', function() {
        it('returns correct response', function(){
            top.get('http://syosetu.com/', function(data){
                assert.equal(data['url'], 'http://syosetu.com/');
                assert.notEqual(data['title'], undefined);
            });
        });
    });
});

