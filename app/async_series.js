var async = require('async');

function AsyncSeries() {};

AsyncSeries.prototype.series = function(values) {
  console.log(values);

  var tasks = [];

  values.forEach(function(value) {
    console.log('Add ' + value + ' to array.');

    tasks.push(function(callback) {
      console.log('Value is ' + value + '.');
      callback(null, null);
    });
  });
  //console.log(tasks);

  async.series(tasks,
    function done(err, results) {
      if (err) {
        console.log(err.toString());
        //throw err;
        return;
      }
      console.log('series all done. ' + results);
  });
};

module.exports = AsyncSeries;


if (require.main === module) {
  var asyncSeries = new AsyncSeries();
  asyncSeries.series(['A', 'B', 'C']);
}

