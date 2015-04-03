'use strict';

angular.module('mean.training').factory('Training',  ['$resource',
  function($resource) {
    return $resource('training/:trainingId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
