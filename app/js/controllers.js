app.controller("navController", ['$scope', '$interval', function ($scope, $interval) {
	var clock = function() {
		$scope.clock = Date.now();
	};
	$interval(clock, 1000);

}]);

app.controller("startController", ['$scope', '$http', '$location', function ($scope, $http, $location) {
		$scope.today = new Date();
		// $scope.today = date;
	
	var skysport = document.getElementById("skysport")
	skysport.addEventListener('click', function(){

    $scope.$apply(function() {
		console.log("update time clicked");
		$http({
	    method : "GET",
	    url : "templates/partials/channel-view/inner-frame.htm"
		}).then(function mySucces(response) {
			document.getElementsByClassName("stream_main").outerHTML = "";
			$scope.myWelcome = response.data;
		}, function myError(response) {
			$scope.myWelcome = response.statusText;
		});

		});
	})
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

