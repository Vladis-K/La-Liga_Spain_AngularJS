
app.controller("mainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
	

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

	

app.controller("secondCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "Schedule";
}]);


app.controller("thirdCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "Schedule";
}]);
