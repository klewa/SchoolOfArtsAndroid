schoolApp.factory("OfficeHour", function ($http, $q, urlBase) {
    // http://localhost:3000/api/locations/findOne?filter[where][city]=Scottsdale

    var factory = {};
    var urlSpecific = 'OfficeHours';

    // http://localhost:3000/api/OfficeHours/?filter[where][Type]=CLASSES&filter[order]=OrderNumber%20ASC
    factory.getByType = function (type) {
        return $http.get(urlBase + urlSpecific + "/?filter[where][Type]="+type+"&filter[order]=OrderNumber%20ASC")
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
            Day: "",
            Hours: "",
            HourType: false,
            OrderNumber: 1,
            Type:""
        };
    }

    return factory;
});