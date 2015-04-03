'use strict';

angular.module('mean.training').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('training example', {
      url: '/training/example',
      templateUrl: 'training/views/index.html'
    });
    $stateProvider.state('training create', {
      url: '/training/create',
      templateUrl: 'training/views/create.html'
  });
   $stateProvider.state('training admin', {
      url: '/training/admin',
      templateUrl: 'training/views/list.html'
  });
  }
]);
