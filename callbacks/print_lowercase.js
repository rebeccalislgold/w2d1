var getHTMLmod = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */
  var minuscule = html.toLowerCase();
  console.log(minuscule);

}

getHTMLmod.getHTML(requestOptions, printLowerCase)