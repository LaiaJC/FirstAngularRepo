'use strict';

/**
 * @ngdoc function
 * @name angularStarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStarterApp
 */
angular.module('angularStarterApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });
});
