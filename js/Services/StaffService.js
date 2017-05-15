schoolApp.factory("Employee", function ($http, $q, urlBase) {
    // http://localhost:3000/api/locations/findOne?filter[where][city]=Scottsdale

    var factory = {};
    var urlSpecific = 'Employees';

    factory.getAll = function () {
        return $http.get(urlBase + urlSpecific).then(function (response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                // invalid response
                return $q.reject(response.data);
            }

        }, function (response) {
            // something went wrong
            return $q.reject(response.data);
        });
    };

    //findOne?filter[where][Key]=INFO_MUS_INSTR_CANTO
    factory.getByIsTeacher = function (isTeacher) {
        return $http.get(urlBase + urlSpecific + "/?filter[where][IsTeacher]=" + isTeacher)
        .then(function (response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                // invalid response
                return $q.reject(response.data);
            }

        }, function (response) {
            // something went wrong
            return $q.reject(response.data);
        });
    };

    factory.update = function (obj) {
        return $http.put(urlBase + urlSpecific + '/' + obj.id, obj).then(function (response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                // invalid response
                return $q.reject(response.data);
            }

        }, function (response) {
            // something went wrong
            return $q.reject(response.data);
        });
    };

    factory.insert = function (obj) {
        return $http.post(urlBase + urlSpecific, obj).then(function (response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                // invalid response
                return $q.reject(response.data);
            }

        }, function (response) {
            // something went wrong
            return $q.reject(response.data);
        });
    };

    factory.delete = function (obj) {
        return $http.delete(urlBase + urlSpecific + '/' + obj.id).then(function (response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                // invalid response
                return $q.reject(response.data);
            }

        }, function (response) {
            // something went wrong
            return $q.reject(response.data);
        });
    };

    factory.GetEmpty = function () {
        return {
            Biography: "",
            Discipline: "",
            Image: "",
            IsTeacher: false,
            Name: "",
            Sex: "H"
        }
    }

    return factory;
});