(function () {
  "use strict";

  angular.module('admin', [
  'ngRoute',
  // 'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/adminlist', {
      templateUrl: '/admin/adminListView.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/addvenue', {
      templateUrl: '/admin/addNewVenue.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/edit/:venueId', {
      templateUrl: '/admin/editVenue.html',
      controller: 'AdminController as adminCtrl'
    })

  });

})();
