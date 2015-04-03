'use strict';

angular.module('mean.profile').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('profile example', {
      url: '/profile/view',
      templateUrl: 'profile/views/index.html'
    })
    .state('profile update', {
      url: '/profile/update',
      templateUrl: 'profile/views/update.html'
    });
  }
]);
