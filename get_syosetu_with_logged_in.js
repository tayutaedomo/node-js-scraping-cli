// Refer: http://qiita.com/ktty1220/items/64168e8d416d6d8ffb45

var client = require('cheerio-httpcli');
client.setBrowser('chrome');
client.debug = true;

var user_id = process.env['SYOSETU_ID'];
var user_pw = process.env['SYOSETU_PW'];

client.fetch('https://ssl.syosetu.com/login/input/')
    .then(function (result) {
        return result.$('#login_box form').submit({
            'id': user_id,
            'pass': user_pw
        });
    })
    .then(function (result) {
        console.log(result.$("title").text());
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
    });

