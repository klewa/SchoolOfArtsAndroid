schoolApp.controller('teachersController', function ($scope, Employee) {

    Employee.getByIsTeacher(true)
       .then(function (employees) {
           $scope.Teachers = employees;

       }
       , function (error) {

       }
       );
})