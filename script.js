// Code goes here
/* global $ */

(function() {

    'use strict';

    angular.module('app', [])
          .controller('mainCtrl', function ($scope) {
      $scope.message = 'Hello Plunker!';
      $scope.user = {
          name: 'Mihai Sitaru',
          age: 31,
          city: 'Iasi',
          friends: [
            'AB',
            'BC',
            'CD'
            ]
      }
    })
          .directive('userInfoCard', function () {
            return {
             templateUrl: "userInfoCard.html",
             restrict: "E",
             controller: function ($scope) {
                 $scope.knightMe = function (user) {
                  user.rank = 'Knight';
                }
                
                $scope.unknightMe = function (user) {
                  user.rank = '';
                }
                
                $scope.card = true;
                
                $scope.hideCard = function () {
                  $scope.card = false;
                  $('.card-body').slideUp('slow').delay(100);
                }
                
                $scope.showCard = function () {
                  $scope.card = true;
                  $('.card-body').slideDown('slow').delay(100);
                }
              }
      }});
  
  })();