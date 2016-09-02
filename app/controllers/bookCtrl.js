'use strict';
//Inject your factory into bookCtrl.js as a dependency

app.controller("BookListCtrl", function($scope, BookStorage) {

  BookStorage.getBookList()
  .then((bookCollection) => {
    $scope.books = bookCollection.guides;
    console.log('HELLO', bookCollection.guides);
  });
});
