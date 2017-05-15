schoolApp.factory("Message", function ($http, $q, urlBase) {
    // http://localhost:3000/api/locations/findOne?filter[where][city]=Scottsdale

    var factory = {};
    var urlSpecific = 'Messages';

    factory.getAll = function () {
        return $http.get(urlBase + urlSpecific)
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

    // http://localhost:3000/api/OfficeHours/?filter[where][Type]=CLASSES&filter[order]=OrderNumber%20ASC
    factory.getByParameters = function (isRestricted, audience)
    {
        return $http.get(urlBase + urlSpecific + "?filter[where][IsRestricted]="+isRestricted+"&filter[Audience]="+audience)
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
            Audience: "",
            IsRestricted: false,
            Message: "",
            PublicationDate: new Date(),
            Title: "",
            ValidityDate: new Date()
        };
    }
    return factory;
});