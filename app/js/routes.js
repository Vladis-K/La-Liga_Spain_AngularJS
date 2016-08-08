
app.config( function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html",
        controller : "MainController"
    })
    .when("/link1", {
        templateUrl : "templates/partials/page_02.html",
        controller : "SecondController"
    })
    .when("/link2", {
        templateUrl : "templates/partials/page_03.html",
        controller : "ThirdController"
    })
    .when("/info/:id", {
        templateUrl : "templates/partials/info.html",
        controller : "InfoController" 
    })
    .otherwise({
        redirectTo: "/"
    });;
});
