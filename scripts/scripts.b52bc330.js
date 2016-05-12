"use strict";angular.module("wheresmytaxiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","mapGeoJSONService","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("wheresmytaxiApp").controller("MainCtrl",["testService",function(a){a.queryData().success(function(a){console.log(a);var b=document.getElementById("map"),c=new google.maps.Map(b,{center:{lat:1.3521,lng:103.8198},zoom:11});c.data.addGeoJson(a)}).error(function(a,b){alert("Unable to load"),console.log(a),console.log(b),console.log(b)})}]),angular.module("wheresmytaxiApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]});var jsonTest=angular.module("mapGeoJSONService",["ngResource"]);jsonTest.factory("testService",["$resource","$http",function(a,b){var c={headers:{"api-key":"x1EBGabWogDOPfCcEPXj1vp4XeHZ7lLh"}},d=function(){return b.get("https://api.data.gov.sg/v1/transport/taxi-availability",c)};return{queryData:d}}]),angular.module("wheresmytaxiApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<style>#map {\r\n        width: 500px;\r\n        height: 500px;\r\n      }</style> <div id="map"> </div>')}]);