app.controller("MainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
	
	$http.get('clubs/clubs.json').success(function(data){
		$scope.infoClub = data;
	});
	
}]);

app.directive('backImg', function(){
	return function(scope, element, attrs){
		var url = attrs.backImg;
		element.css({
			'background-image': 'url(' + url +')',
			'background-size' : 'cover'
		});
	};
});

app.filter('euroCups', function(){
	return function(input){
		// console.log(input);
	}
})

// app.controller("bettingController", [ '$scope', function ($scope) {
// 	$scope.msg = "Betting";
//
//
// }]);

app.controller("startController", ['$scope', '$http', '$location', function ($scope, $http, $location) {
	$scope.msg = "Video";
}]);

app.controller("sportController", ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.msg = "News";
	$scope.description = "Season 2016/2017";
	//$scope.bg = '/img/background/02.jpg';

	var date = new Date();
	$scope.today = date;
}]);


app.controller("moreController", ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.msg = "More";
    // $scope.f = $scope.infoClub[$routeParams.id]

}]);

