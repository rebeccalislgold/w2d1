var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {

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

getAndPrintHTML()