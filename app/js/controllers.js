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

app.controller('bettingController', function ($scope) {


});


app.controller("startController", ['$scope', '$http', '$location', function ($scope, $http, $location) {

	var date = new Date();
	$scope.today = date;

	$scope.msg = "Betting";



}]);


app.controller("sportController", ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.msg = "Sports radio";
	//$scope.bg = '/img/background/02.jpg';

}]);


app.controller("moreController", ['$scope',  function ($scope) {
    $scope.msg = "More";

    // $scope.f = $scope.infoClub[$routeParams.id]


}]);

