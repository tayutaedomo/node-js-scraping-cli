# nodejs-scraping
Try scraping by node.js

# Usage
## top.js
Get a web page with 'request' and 'cheerio' modules.

```
$ node app/top.js
```

## user_top.js
Get a web page with 'cheerio-httpcli' moudle and try to sign in.

```
$ export SYOSETU_ID="your user id"
$ export SYOSETU_PW="your password"
$ node app/user_top.js
```

## recommend.js
Get some contents with 'cheerio-httpcli' moudle.

```
$ node app/recommend.js
```

## novel_top.js
Get some contents with 'cheerio-httpcli' moudle.

```
$ node app/novel_top.js
```

## novel_info.js
Get some contents with 'cheerio-httpcli' moudle.

```
$ node app/novel_info.js
```

## store_syosetu_top.js
Store some contents to db table with 'sequelize' module and use db migration by sequelize.

```
$ npm i sequelize-cli -g
$ #sequelize migration:create
$ #sequelize init
$ sequelize db:migrate
$ node app/store_syosetu_top.js
```

# Test
```
npm test
```

