'use strict';

/* jshint -W098 */
angular.module('mean.training').controller('TrainingController', ['$scope', 'Global', 'Training','$location',
  function($scope, Global, Training,$location) {
    $scope.global = Global;
    $scope.package = {
      name: 'training'
    };
    
    $scope.save = function() {
        Training.save($scope.training);
    };
    
    $scope.getAll = function() {
       $scope.trainings= Training.get();
    };
    
    if($location.path() === '/training/admin')
    {
        $scope.trainings=[];
        $scope.getAll();
    }
    console.log($location.path());
  }
]);
