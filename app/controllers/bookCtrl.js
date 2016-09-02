'use strict';

app.controller("BookCtrl", function($scope, $http, $q) {

  $scope.getBookList = () => {
    let trips = [];
    return $q((resolve, reject) => {
      $http.get('../../data/guides.json')
      .success((bookObject) => {
        $scope.books = bookObject.guides;
        console.log('HELLO', bookObject.guides);
        resolve((bookObject));
      })
      .error((error) => {
        reject(error);
      });
    });
  };

});

