app.config( function($routeProvider) {
    $routeProvider
    .when("/", {
            templateUrl : "templates/partials/start.htm",
            controller : "startController"
        })
    .when("/more", {
         templateUrl : "templates/partials/more.htm",
         controller : "movieController"
        })
        .when("/betting", {
        templateUrl : "templates/partials/betting.htm",
        controller : "bettingController"
    })
    .when("/sport", {
            templateUrl : "templates/partials/sport.htm",
            controller : "radioController"
        })
    .when("/main", {
         templateUrl : "templates/main.htm",
         controller : "MainController"
     })
    .otherwise({
        redirectTo: "/"
    });
});
