schoolApp.controller('annoucementsController', function ($scope, Message) {

    Message.getByParameters(false, "PUBLIC").then(function (messages) {
        $scope.Messages = messages;
    }
   , function (error) {

       $scope.status = 'Unable to load Contact data: ' + error.message;
   });

})