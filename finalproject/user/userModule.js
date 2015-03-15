(function () {
  "use strict";

  angular.module('user', [
  'ngRoute',
  // 'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/animals', {
      templateUrl: '/user/catListViewAnimals.html',
      controller: 'UserController as userCtrl'
    })
    .when('/beaches', {
      templateUrl: '/user/catListViewBeaches.html',
      controller: 'UserController as userCtrl'
    })
    .when('/indoor', {
      templateUrl: '/user/catListViewIndoor.html',
      controller: 'UserController as userCtrl'
    })
    .when('/museums', {
      templateUrl: '/user/catListViewMuseums.html',
      controller: 'UserController as userCtrl'
    })
    .when('/outdoor', {
      templateUrl: '/user/catListViewOutdoor.html',
      controller: 'UserController as userCtrl'
    })
    .when('/parks', {
      templateUrl: '/user/catListViewParks.html',
      controller: 'UserController as userCtrl'
    })
    .when('/party', {
      templateUrl: '/user/catListViewParty.html',
      controller: 'UserController as userCtrl'
    })
    .when('/resources', {
      templateUrl: '/user/otherResources.html',
      controller: 'UserController as userCtrl'
    })
    .when('/map', {
      templateUrl: '/user/mapView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/favorites', {
      templateUrl: '/user/favoritesView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/details/:venueId', {    
      templateUrl: '/user/detailView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/suggestions', {
      templateUrl: '/user/suggestionsView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/other', {
      templateUrl: '/user/otherResources.html',
      controller: 'UserController as userCtrl'
    })
  });

})();
