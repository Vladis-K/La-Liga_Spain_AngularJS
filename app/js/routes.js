
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html",
        controller : "mainController"
    })
    .when("/link1", {
        templateUrl : "templates/page_02.html",
        controller : "secondCtrl"
    })
    .when("/link2", {
        templateUrl : "templates/page_03.html",
        controller : "thirdCtrl"
    })
    .otherwise({redirectTo: "/"});;
});