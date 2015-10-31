var assert = require('assert');
var Home = require('./../app/home.js');

describe('Home', function(){
    var home;

    beforeEach(function(){
        home = new Home()
    });

    describe('get', function() {
        it('returns correct response', function(){
            home.get('http://syosetu.com/', function(data){
                assert.equal(data['url'], 'http://syosetu.com/');
                assert.notEqual(data['title'], undefined);
            });
        });
    });
});

