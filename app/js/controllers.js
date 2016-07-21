
app.controller("mainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
	

	$scope.description = "La Liga";

	var date = new Date();
	$scope.today = date;

	$http.get('clubs/barcelona2.json').success(function(data){
			$scope.infoClub = data;
	});

}]);


app.controller("secondCtrl", function ($scope) {
    $scope.msg = "Text of Link";

});

app.controller("thirdCtrl", function ($scope) {
    $scope.msg = "Text of Link2";
});
