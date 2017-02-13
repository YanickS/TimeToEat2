// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('demo', ['ionic', 'IonicitudeModule', 'demo.services'])

  .run(function ($ionicPlatform, Ionicitude) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      // The code placed inside the $ionicPlatform.ready() function is executed only when the device is ready,
      // so this is a perfect place to call the Ionicitude.init() method.
      Ionicitude.init()
        .then(function () {
          console.log('Here you go. Ionicitude is fully initialized !');
          // Now that Ionicitude is initialized, we can safely add the Actions that could be called from within an AR View.
          // Note that these actions will be executed by the Ionic WebView and in its context.
          // To call this captureScreen action, there should be, in one of your AR World JS code and assuming that you're using Ionicitude's CHM, something like :
          //  document.location = architectsdk://captureScreen
          Ionicitude
            .addAction(captureScreen)
            .addAction(markerselected);
        })
        .catch(function (error) {
          console.log("Hu-ho..! Something has failed !", error);
        });

      // It suggested to declare your Action as named function instead of passing callbacks to Ionicitude.addAction().
      // It's somewhat more readable.

      // The call to this Action is in www/wikitude-worlds/6_BrowsingPois_6_Bonus-CaptureScreen/js/capturescreen.js:283
      function captureScreen() {
        Ionicitude.captureScreen(true, null)
          .then(function (absoluteFilePath) {
            console.log("snapshot stored at:\n" + absoluteFilePath);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      // The call to this Action is in www/wikitude-worlds/6_BrowsingPois_6_Bonus-CaptureScreen/js/capturescreen.js:126
      function markerselected(service, params) {
        console.log('This is the marker #' + params.id + ', that is named ' + params.title + ', and that has this description: ' + params.description);
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tab.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'templates/tab-list.html',
          controller: 'ListCtrl'
        }
      }
    })
    .state('tab.list-detail', {
        url: '/list/:id',
        views: {
          'tab-list': {
            templateUrl: 'templates/list-detail.html',
            controller: 'ListDetailCtrl'
          }
        }
      })
    .state('tab.map', {
        url: '/map',
        views: {
          'tab-map': {
            templateUrl: 'templates/tab-map.html',
            controller: 'MapCtrl'
          }
        }
      })
    .state('tab.ar', {
      url: '/ar',
      views: {
        'tab-ar': {
          templateUrl: 'templates/tab-ar.html',
          controller: 'ArCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/list');

})

.controller('ListCtrl', function ($scope, Restaurants, $window) {
  $scope.restaurants = {};
  $scope.filteredRestaurants = [];
  $scope.distance = 5000;
  $scope.currentLocation = {};

  $scope.toRad = function(value) {
    return value * Math.PI / 180;
  }

  $scope.dist = function(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = $scope.toRad(lat2-lat1);
    var dLon = $scope.toRad(lon2-lon1);
    var newLat1 = $scope.toRad(lat1);
    var newLat2 = $scope.toRad(lat2);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(newLat1) * Math.cos(newLat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return Math.round(d*100)/100;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.currentLocation = position.coords;
        $scope.restaurants = Restaurants.all();
        for(var i = 0; i < $scope.restaurants.length; i++){
          $scope.restaurants[i].distance = $scope.dist($scope.currentLocation.latitude, $scope.currentLocation.longitude, $scope.restaurants[i].lat, $scope.restaurants[i].lng);
          if($scope.restaurants[i].distance <= ($scope.distance/1000)){
            $scope.filteredRestaurants.push($scope.restaurants[i]);
          }
        }
      });
    });
  }

  $scope.updateList = function(){
    $scope.filteredRestaurants = [];
    for(var i = 0; i < $scope.restaurants.length; i++){
      if($scope.restaurants[i].distance <= ($scope.distance/1000)){
        $scope.filteredRestaurants.push($scope.restaurants[i]);
      }
    }
  }

  $scope.seeDetail = function(restaurantId){
    $window.location.href = '#/tab/list/' + restaurantId;
  }
})

.controller('ListDetailCtrl', function($scope, $stateParams, Restaurants) {
  $scope.restaurant = Restaurants.get($stateParams.id);

  $scope.openMap = function(restaurant) {
    // Copié collé de l'app précédante
    /*this.navcontroller.push(MapPage, {
      restaurant: restaurant
    });*/
    console.log(restaurant);
  }

  $scope.launch = function(url) {
    // Copié collé de l'app précédante
    /*this.platform.ready().then(() => {
      cordova.InAppBrowser.open(url, "_system", "location=true");
    });*/
    console.log(url);
  }  
  
})

.controller('MapCtrl', function($scope) {
})

.controller('ArCtrl', function($scope, Ionicitude) {
   $scope.launchAR = function (ref) {
      try {
        // The ref passed as an argument to Ionicitude.launchAR() must be the name
        // of a directory in the wikitude-worlds directory.
        Ionicitude.launchAR(ref)
          .then(function () {
            console.log('OK ! The ' + ref + ' AR World has been perfectly launched !');
          })
          .catch(function (error) {
            console.log('Error while trying to launch the ' + ref + ' AR World.', error);
          })
      } catch (error) {
        console.log('But... Why ?! Something happened ?', error);
      }
    }
});
