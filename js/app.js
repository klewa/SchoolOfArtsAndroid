// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var schoolApp = angular.module('schoolOfArts', ['ionic']);

schoolApp.constant("urlBase", "http://schoolofarts.mybluemix.net/api/");

schoolApp.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

schoolApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html'
      })
        .state('app.school', {
            url: '/school',
            views: {
                'menuContent': {
                    templateUrl: 'templates/school.html',
                    controller: 'homeController'
                }
            }
        })

        .state('app.secretaryOffice', {
            url: '/secretaryOffice',
            views: {
                'menuContent': {
                    templateUrl: 'templates/office/officeMenu.html'
                }
            }
        })
     .state('app.messages', {
         url: '/messages',
         views: {
             'menuContent': {
                 templateUrl: 'templates/office/messages.html',
                 controller: 'annoucementsController'
             }
         }
     })
        .state('app.classesHours', {
            url: '/classesHours',
            views: {
                'menuContent': {
                    templateUrl: 'templates/office/classesHours.html',
                    controller: 'classesHoursController'
                }
            }
        })
        .state('app.officeHours', {
            url: '/officeHours',
            views: {
                'menuContent': {
                    templateUrl: 'templates/office/officeHours.html',
                    controller: 'secretaryOfficeHoursController'
                }
            }
        })

        
        .state('app.staff', {
            url: '/staff',
            views: {
                'menuContent': {
                    templateUrl: 'templates/staff/staffMenu.html'
                }
            }
        })
        .state('app.teachers', {
            url: '/teachers',
            views: {
                'menuContent': {
                    templateUrl: 'templates/staff/teachers.html',
                    controller: 'teachersController'
                }
            }
        })
        .state('app.employees', {
            url: '/employees',
            views: {
                'menuContent': {
                    templateUrl: 'templates/staff/employees.html',
                    controller: 'employeesController'
                }
            }
        })
        .state('app.events', {
            url: '/events',
            views: {
                'menuContent': {
                    templateUrl: 'templates/events/events.html',
                    controller: 'eventsController'
                }
            }
        })
         .state('app.contact', {
             url: '/contact',
             views: {
                 'menuContent': {
                     templateUrl: 'templates/contact.html',
                     controller: 'contactInfoController'
                 }
             }
         })
   
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/school');
});
