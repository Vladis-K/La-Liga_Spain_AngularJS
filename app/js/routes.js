app.config( function($routeProvider) {
    $routeProvider
    .when("/", {
            templateUrl : "templates/partials/start.htm",
            controller : "startController"
        })
    .when("/sport", {
        templateUrl : "templates/partials/sport.htm",
        controller : "sportController"
    })
    .when("/more", {
         templateUrl : "templates/partials/more.htm",
         controller : "movieController"
        })
        .when("/betting", {
        templateUrl : "templates/partials/betting.htm",
        controller : "bettingController"
    })

    .when("/main", {
         templateUrl : "templates/main.htm",
         controller : "MainController"
     })
    // .when("/info/:id", {
    //     templateUrl : "templates/partials/more.htm",
    //     controller : "moreController"
    // })
    .otherwise({
        redirectTo: "/"
    });
});
