schoolApp.controller('employeesController', function ($scope, Employee) {

    Employee.getByIsTeacher(false)
       .then(function (employees) {
           $scope.OtherEmployees = employees;

       }
       , function (error) {

       }
       );

})