
app.controller("mainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
	

	$scope.description = "La Liga";

	var date = new Date();
	$scope.today = date;

	$http.get('clubs/barcelona.json').success(function(data){
			$scope.infoClub = data;
	});

}]);

app.filter('euroCups', function(){
	return function(input){

		// console.log(input);

	}
})

	

app.controller("secondCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "Text of Link";

}]);


app.controller("thirdCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "Text of Link2";
}]);
