var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
		.when("/home", {
        templateUrl : "main.html"
    })
    .when("/getUniqueList", {
        templateUrl : "getUniqueList.html",
        controller : "getUniqueListController"
    })
    .when("/operationsRut", {
        templateUrl : "operationsRut.html",
        controller : "operationsRutController"
    })
		.when("/toOneLineString", {
        templateUrl : "toOneLineString.html",
        controller : "toOneLineStringController"
    });


});



