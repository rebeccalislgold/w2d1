var https = require('https');

function getHTML (options, callback) {

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




function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)