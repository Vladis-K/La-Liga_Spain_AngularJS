
app.controller("mainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
	

	$scope.description = "La Liga";

	var date = new Date();
	$scope.today = date;

	$http.get('clubs/barcelona.json').success(function(data){
			$scope.infoClub = data;
	});

}]);

app.controller("secondCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "Text of Link";

}]);

app.controller("thirdCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "Text of Link2";
}]);


// app.controller("scheduleController", ['$scope', '$http', '$location' '$routeParams', function ($scope, $http, $location, $routeParams) {

//     $scope.msg = "Upcoming";
//     $scope.infoClubId = $routeParams.infoClubId;

// }]);