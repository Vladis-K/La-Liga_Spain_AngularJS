
app.controller("MainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
	
	$scope.description = "Season 2016/2017";
	$scope.bg = '/img/background/02.jpg';


	var date = new Date();
	$scope.today = date;
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


app.controller("SecondController", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "News";
}]);


app.controller("ThirdController", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.msg = "Video";
}]);


app.controller("InfoController", ['$scope', '$routeParams', function ($scope, $routeParams) {

    $scope.msg = "Schedule";
    // $scope.f = $scope.infoClub[$routeParams.id]

}]);

