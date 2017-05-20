'use strict';
app.controller('MainController', function ($scope,$http) {
 	var temp = null;
   $http.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
    .then(function(response) {
       $scope.employees = response.data;
    });
  	

});
