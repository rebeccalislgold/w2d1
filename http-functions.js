var https = require('https');

module.exports = {

  getHTML: function(options, callback) {

  /* Add your code here */

    https.get(options, function (response) {

    var bufferedStr = {}

    response.on('data', function (data) {

      for (var chunk in data) {

        var chunk = data
        bufferedStr += chunk

      }
    });

    response.on('end', function() {
      callback(bufferedStr);
      });

    });
  }
}