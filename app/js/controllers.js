app.controller("navController", ['$scope', '$interval', function ($scope, $interval) {
	var clock = function() {
		$scope.clock = Date.now();
	};
	$interval(clock, 1000);

}]);

app.controller("startController", ['$scope', '$http', '$location', function ($scope, $http, $location) {
		$scope.today = new Date();
		// $scope.today = date;

}]);

app.controller("movieController", ['$scope',  function ($scope) {
	$scope.msg = "Most popular highlights";

}]);

app.controller('bettingController', function ($scope) {
	$scope.msg = "Links to BET";
});

app.controller("radioController", ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.msg = "Sports radio";
	//$scope.bg = '/img/background/02.jpg';

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











// app.controller("MainController", [ '$scope', '$http', '$location', function ($scope, $http, $location) {
// 	$http.get('clubs/clubs.json').success(function(data){
// 		$scope.infoClub = data;
// 	});
// }]);

