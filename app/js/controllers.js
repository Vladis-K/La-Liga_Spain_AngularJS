
app.controller("mainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
	

	$scope.description = "Standings";

	var date = new Date();
	$scope.today = date;
	$http.get('clubs/clubs.json').success(function(data){

			$scope.infoClub = data;

			$scope.list = "";
			for (var i = 0; i<= $scope.infoClub.length; i++) {
					 $scope.list += $scope.list;

					 console.log(i);
			};

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
