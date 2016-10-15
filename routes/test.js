'use strict';
var router = require('express').Router();
var AV = require('leanengine');

///////////////////////////////////////////////dongyin add begin/////////////////////////////////////////////////////
var baiduMap = require('baidumap');
var baidu_key = 'kDAWFBnzrIZeC8xHzxfqgy9C';
var bdmap = baiduMap.create({ 'ak': baidu_key });
router.get('/getlocation', function(req, res, next) {
  console.log("DONGYIN getlocation",req.query.lat);

  var address;
  var lat = req.query.lat;
  var lng = req.query.lng;

  var latlng = lat + ',' + lng;
  var reverseGeocoderOption = { 'location': latlng, 'pois': 1 };
  bdmap.reverseGeocoder(reverseGeocoderOption, function (err, result) {
    var results = JSON.parse(result);



    if (err) {
      console.error(err);
    } else {
      if (results.status == 0) {
        var addressComponent = results.result.addressComponent;
        var city = addressComponent.city;
        var country = addressComponent.country;
        address = city + "." + country;
        // console.log("DONGYIN address",address);
        res.send('respond with a getlocation  address = ' +results.result.formatted_address);
      } else {

      }
    }
  });

});


///////////////////////////////////////////////////dongyin add end/////////////////////////////////////////////////////////////////

module.exports = router;
