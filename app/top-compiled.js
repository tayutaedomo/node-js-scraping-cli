const request = require('request');
const cheerio = require('cheerio');

const Top = () => {
  return {
    // Refer: http://liginc.co.jp/programmer/archives/4848
    get: (url, callback) => {
      request({ url: url }, (error, response, body) => {
        const result = {};

        if (!error && response.statusCode == 200) {
          $ = cheerio.load(body);
          result.url = response.request.href;
          result.title = $('title').text();
        } else {
          console.log('--------------------------------------------------');
          if (error && 'code' in error) {
            console.log('Error Code:' + error.code);
          }
          if (error && 'errno' in error) {
            console.log('Error No:' + error.errno);
          }
          if (error && 'syscall' in error) {
            console.log('Error Syscall:' + error.syscall);
          }
          if (response && 'statusCode' in response) {
            console.log('Status Code:' + response.statusCode);
          }
        }

        callback(result);
      });
    }
  };
};

module.exports = Top;

// Refer: http://stackoverflow.com/questions/4981891/node-js-equivalent-of-pythons-if-name-main
if (require.main === module) {
  const top = new Top();
  top.get('http://syosetu.com/', data => {
    console.log(data);
  });
}

//# sourceMappingURL=top-compiled.js.map