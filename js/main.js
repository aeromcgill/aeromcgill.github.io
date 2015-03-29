/**
 * Main AngularJS Web Application
 */
var app = angular.module('aerosite', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/main.html", controller: "PageCtrl"})
    // Pages
    .when("/competitions", {templateUrl: "partials/competitions.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/news", {templateUrl: "partials/news.html", controller: "PageCtrl"})
    .when("/sponsors", {templateUrl: "partials/sponsors.html", controller: "PageCtrl"})
    .when("/team", {templateUrl: "partials/team.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/main.html", controller: "PageCtrl"});
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});