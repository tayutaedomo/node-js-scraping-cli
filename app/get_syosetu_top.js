// Refer: http://liginc.co.jp/programmer/archives/4848

var request = require("request");
var cheerio = require("cheerio");

var requestUrl = "http://ncode.syosetu.com/n9286cs/";

request({url: requestUrl}, function(error, response, body) {
 
    if (!error && response.statusCode == 200) {
        $ = cheerio.load(body);
 
        var url = response.request.href;
        var title = $("title").text();
 
        console.log(url);
        console.log(title);

    } else {
        console.log("--------------------------------------------------");
        if (error && "code" in error) {
            console.log("Error Code:" + error.code);
        }
        if (error && "errno" in error) {
            console.log("Error No:" + error.errno);
        }
        if (error && "syscall" in error) {
            console.log("Error Syscall:" + error.syscall);
        }
        if (response && "statusCode" in response) {
            console.log("Status Code:" +  response.statusCode);
        }
    }
});

