var client = require('cheerio-httpcli');

var UserTop = function() {
    client.setBrowser('chrome');
    client.debug = true;

    return {
        // Refer: http://qiita.com/ktty1220/items/64168e8d416d6d8ffb45
        get: function(url, user_id, user_pw, callback) {
            var data = {};

            client.fetch(url)
                .then(function (result) {
                    return result.$('#login_box form').submit({
                        'id': user_id,
                        'pass': user_pw
                    });
                })
                .then(function (result) {
                    data['title'] = result.$("title").text();
                })
                .catch(function (err) {
                    console.log(err);
                })
                .finally(function () {
                    callback(data);
                });
        }
    };
};


if (require.main === module) {
    var user_id = process.env['SYOSETU_ID'];
    var user_pw = process.env['SYOSETU_PW'];
    var url = 'https://ssl.syosetu.com/login/input/';

    var userTop = new UserTop();
    userTop.get(url, user_id, user_pw, function(data){
        console.log(data);
    });
}

