app.config( function($routeProvider) {
    $routeProvider
    // .when("/", {
    //     templateUrl : "templates/main.htm",
    //     controller : "MainController"
    // })
    .when("/start", {
            templateUrl : "templates/partials/start.htm",
            controller : "startController"
        })
    .when("/sport", {
        templateUrl : "templates/partials/sport.htm",
        controller : "sportController"
    })
    .when("/more", {
        templateUrl : "templates/partials/more.htm",
        controller : "moreController"
    })
    // .when("/info/:id", {
    //     templateUrl : "templates/partials/more.htm",
    //     controller : "moreController"
    // })
    .otherwise({
        redirectTo: "/main"
    });
});
