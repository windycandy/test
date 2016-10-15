'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var fs = require("fs");

///////////////////////////////////////////////dongyin add begin/////////////////////////////////////////////////////


router.get('/', function(req, res, next) {
  var cwd = process.cwd();
  console.log( "__dirname = " + __dirname  );
  console.log( cwd + "/"+"updateapp"+ "/" + "updateApp.json" );

  fs.readFile(cwd + "/"+"updateapp"+ "/" + "updateApp.json", 'utf8', function(err, data) {
    console.log("data = " + data );
    console.log("err = " + err );
    res.send( data );
  });
});


router.get('/download', function(req, res, next) {
  var cwd = process.cwd();
  var f;

  f = cwd + "/"+"updateapp"+ "/" + "Sioeye.apk"
  console.log('Download file: %s', f);
  res.download(f);
});



///////////////////////////////////////////////////dongyin add end/////////////////////////////////////////////////////////////////

module.exports = router;
