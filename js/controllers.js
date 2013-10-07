'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AffairController', ['$scope', function($scope) {
    $scope.isHavingAffair = false;

    $scope.checkAffair = function() {
        if (!isNaN(parseFloat($scope.mobile)) && isFinite($scope.mobile)) {
            $scope.isHavingAffair = true;
        } else {
            $scope.isHavingAffair = false;
        }
    }
  }]);