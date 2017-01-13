app.controller("startController", ['$scope', '$http', '$location', '$interval', function ($scope, $http, $location, $interval) {

		$scope.today = new Date();
		// $scope.today = date;

		var clock = function() {
			$scope.clock = Date.now();
		};
		$interval(clock, 1000);

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



app.controller('bettingController', function ($scope) {
	$scope.msg = "Links to BET";
});



app.controller("sportController", ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.msg = "Sports radio";
	//$scope.bg = '/img/background/02.jpg';

}]);


app.controller("movieController", ['$scope',  function ($scope) {
    $scope.msg = "Most popular highlights";
	
}]);

// app.controller("MainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
// 	$http.get('clubs/clubs.json').success(function(data){
// 		$scope.infoClub = data;
// 	});
// }]);

