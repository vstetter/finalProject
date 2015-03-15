 (function () {
   "use strict";
   angular.module('ChasKids', [
   'ngRoute',
   'admin',
   'user'
   ])
   .config(function($routeProvider){
     $routeProvider
     .when('/', {
       templateUrl: 'views/splash.html',
       controller: 'UserController as userCtrl'
     })
     .when('/not_found', {
       templateUrl: 'views/404.html',
       controller: 'UserController as userCtrl'
     })
    .otherwise({
      redirectTo: '/not_found'
     })
    });

      // .constant('_', _)

 })();
