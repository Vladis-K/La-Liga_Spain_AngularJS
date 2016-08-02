
app.config( function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html",
        controller : "MainController"
    })
    .when("/link1", {
        templateUrl : "templates/page_02.html",
        controller : "SecondCtrl"
    })
    .when("/link2", {
        templateUrl : "templates/page_03.html",
        controller : "ThirdCtrl"
    })
    // .when("/clubs/:id", {
    //     templateUrl : "templates/page_schedule.html",
    //     controller : "scheduleController"
    // })
    .otherwise({
        redirectTo: "/"
    });;
});
