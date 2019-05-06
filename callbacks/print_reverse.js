var getHTMLmod = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */

  var backwards = ""

  for (i = html.length; i >= 0; i--) {

    backwards += html[i]

  }

  console.log(backwards);

}

getHTMLmod.getHTML(requestOptions, printReverse)