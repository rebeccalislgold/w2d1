var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {

    response.on('data', function (data) {

      var bufferedStr = {}
      for (var chunk in data) {

        var chunk = data
        bufferedStr += chunk

      }

      console.log(bufferedStr);

    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)