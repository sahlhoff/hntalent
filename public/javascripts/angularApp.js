
angular.module('ngView', [], function($routeProvider, $locationProvider) {
$routeProvider.when('/', {
      templateUrl: 'partials/february2013.html',
      controller: FebCtrl
    });
    $routeProvider.when('/january', {
      templateUrl: '/partials/january2013.html',
      controller: JanCtrl
    });
    $routeProvider.when('/december', {
        templateUrl: 'partials/december2012.html',
        controller: DecCtrl
    });
    $routeProvider.when('/november', {
      templateUrl: 'partials/november2012.html',
      controller: NovCtrl
    });
    $routeProvider.when('/october', {
      templateUrl: 'partials/october2012.html',
      controller: OctCtrl
    });
    $routeProvider.when('/september', {
      templateUrl: 'partials/september2012.html',
      controller: SeptCtrl
    });
     return $routeProvider.otherwise({
      redirectTo: '/'
    });
 
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});



function SeptCtrl($scope, $http) {
  $scope.septjobs = [];

  $http({method: 'GET', url: '/september2012'}).
    success(function(data, status, headers, config) {
      $scope.septjobs = data.jobs;
    });
}

function OctCtrl($scope, $http) {
  $scope.jobs = [];

  $http({method: 'GET', url: '/october2012'}).
    success(function(data, status, headers, config) {
      $scope.jobs = data.jobs;
    });
}

function NovCtrl($scope, $http) {
  $scope.jobs = [];

  $http({method: 'GET', url: '/november2012'}).
    success(function(data, status, headers, config) {
      $scope.jobs = data.jobs;
    });
}

function DecCtrl($scope, $http) {
  $scope.jobs = [];

  $http({method: 'GET', url: '/december2012'}).
    success(function(data, status, headers, config) {
      $scope.jobs = data.jobs;
    });
}

function JanCtrl($scope, $http) {
  $scope.jobs = [];

  $http({method: 'GET', url: '/january2013'}).
    success(function(data, status, headers, config) {
      $scope.jobs = data.jobs;
    });
}

function FebCtrl($scope, $http) {
  $scope.jobs = [];

  $http({method: 'GET', url: '/february2013'}).
    success(function(data, status, headers, config) {
      $scope.jobs = data.jobs;
    });
}

function MainCntl($scope, $route, $routeParams, $location) {
  console.log('in MainCntl')
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
}

