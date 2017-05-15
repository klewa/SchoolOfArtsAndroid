schoolApp.controller('secretaryOfficeHoursController', function ($scope, OfficeHour) {

    OfficeHour.getByType("OFFICE").then(function (hours) {
        $scope.SecretaryOfficeHours = hours;
    }
   , function (error) {

       $scope.status = 'Unable to load Contact data: ' + error.message;
   });

})