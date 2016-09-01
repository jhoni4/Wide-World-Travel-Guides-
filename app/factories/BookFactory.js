'use strict';

app.factory("BookStorage", ($q, $http) => {

  console.log("bookObject");
  let getBookList = () => {
    let book = [];
    return $q((resolve, reject) => {
      $http.get("../../data/guides.json")
      .success((bookObject) => {
        resolve((bookObject));
      })
      .error((error) => {
        reject(error);
      });
    });
  };
  return {getBookList};
});
