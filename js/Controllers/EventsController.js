schoolApp.controller('eventsController', function ($scope, Event) {

    $scope.Events = [];
    Event.getAll().then(function (events) {
        $scope.Events = events;

        var date = new Date();
        //date.setDate(date.getDate() + 7);
        var filtered = $scope.Events.filter(function (value) {
            return new Date(value.Date).withoutTime() >= date.withoutTime();
        });

        //if (filtered.length > 0 && !$sessionStorage.get("EventsWarningShown", false)) {

        //    if (filtered.length == 1)
        //        MessageBox.Show("Atenção: há um evento a acontecer brevemente.");
        //    else
        //        MessageBox.Show("Atenção: há " + filtered.length + " eventos a acontecer brevemente.");

        //    $sessionStorage.store("EventsWarningShown", true);
        //}
    }
    , function (error) {

        $scope.status = 'Unable to load Contact data: ' + error.message;
    });

});