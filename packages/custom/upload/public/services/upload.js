'use strict';

angular.module('mean.upload').factory('Upload', ['$resource',
  function($resource) {
    return {
      name: 'upload',
      getImage:function(image) {
        return  $resource('/upload/get/:image').get({'image': image});
      },
      getSignature:function() {
          return $resource('/upload/signature').get();
      },
      deleteFile:function(filePath) {
            return $resource('/delete/file').save({file:filePath});
      }
    };
  }
]);
