
app.controller("MainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
	
	$scope.description = "Season 2016/2017";

	var date = new Date();
	$scope.today = date;
	$http.get('clubs/clubs.json').success(function(data){
			$scope.infoClub = data;
	});
}]);

app.filter('euroCups', function(){
	return function(input){
		// console.log(input);
	}
})


app.controller("SecondController", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "List";
}]);


app.controller("ThirdController", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "News";
}]);


app.controller("InfoController", ['$scope', '$routeParams', function ($scope, $routeParams) {

    $scope.msg = "Info";
    // $scope.f = $scope.infoClub[$routeParams.id]

}]);

