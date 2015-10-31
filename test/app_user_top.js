var assert = require('assert');
var UserTop = require('./../app/user_top');

describe('UserTop', function() {
    var user_top;

    beforeEach(function() {
        user_top = new UserTop();
    });

    describe('get', function() {
        it('does not return correct response with invalid id and pw', function() {
            var url = 'https://ssl.syosetu.com/login/input/';
            user_top.get(url, 'dummy', 'dummy', function(data){
                assert.equal(data, {});
            });
        });
    });
});

