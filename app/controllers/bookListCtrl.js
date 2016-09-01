'use strict';

app.controller("BookListCtrl", function($scope, BookStorage) {

  BookStorage.getBookList()
  .then((bookCollection) => {
    $scope.books = bookCollection.guides;
    console.log('HELLO', bookCollection.guides);
  });
});
