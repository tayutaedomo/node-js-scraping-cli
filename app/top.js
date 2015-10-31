var request = require("request");
var cheerio = require("cheerio");

var top = function() {
    return {
        // Refer: http://liginc.co.jp/programmer/archives/4848
        get: function(url, callback) {
            request({url: url}, function(error, response, body) {
                var result = {};

                if (!error && response.statusCode == 200) {
                    $ = cheerio.load(body);
                    result['url'] = response.request.href;
                    result['title'] = $("title").text();

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

                callback(result);
            });
        }
    };
};

module.exports = top;


// Refer: http://stackoverflow.com/questions/4981891/node-js-equivalent-of-pythons-if-name-main
if (require.main === module) {
    var top = new top();
    top.get("http://syosetu.com/", function(data){
        console.log(data);
    });
}

