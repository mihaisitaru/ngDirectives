// Code goes here
/* global $ */

(function () {

    'use strict';

    angular.module('app', [])
        .controller('mainCtrl', function ($scope) {
            $scope.message = 'Hello Plunker!';
            $scope.user1 = {
                name: 'Mihai Sitaru',
                age: 31,
                city: 'Iasi',
                friends: [
                    'AB',
                    'BC',
                    'CD'
                ]
            };
            $scope.user2 = {
                name: 'Anamaria Sitaru',
                age: 31,
                city: 'Iasi',
                friends: [
                    'AB',
                    'BC',
                    'CD'
                ]
            };
        })
        .directive('userInfoCard', function () {
            return {
                templateUrl: "userInfoCard.html",
                restrict: "E",
                scope: {
                    user: "="
                },
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
                        $scope.card = !$scope.card;
                        $('.card-body').slideDown('slow').delay(100);
                    }
                }
            }
        });

   /* .directive('myDirective', function () {
        return {
            scope: {

            }
        }
    });*/

})();