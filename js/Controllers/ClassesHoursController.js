schoolApp.controller('classesHoursController', function ($scope, OfficeHour) {

    OfficeHour.getByType("CLASSES").then(function (hours) {
        $scope.ClassesHours = hours;
    }
   , function (error) {

       $scope.status = 'Unable to load Contact data: ' + error.message;
   });

})