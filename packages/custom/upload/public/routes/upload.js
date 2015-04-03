'use strict';

angular.module('mean.upload').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('upload example page', {
      url: '/upload/example',
      templateUrl: 'upload/views/index.html'
    });
  }
]);
