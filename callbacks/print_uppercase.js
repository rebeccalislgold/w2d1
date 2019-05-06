var getHTMLmod = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  var Capitals = html.toUpperCase();
  console.log(Capitals);

}

getHTMLmod.getHTML(requestOptions, printUpperCase)