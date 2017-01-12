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

	$scope.oneAtATime = true;

	$scope.groups = [
		{
			title: 'Dynamic Group Header - 1',
			content: 'Dynamic Group Body - 1'
		},
		{
			title: 'Dynamic Group Header - 2',
			content: 'Dynamic Group Body - 2'
		}
	];

	$scope.items = ['Item 1', 'Item 2', 'Item 3'];

	$scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
	};

	$scope.status = {
		isCustomHeaderOpen: false,
		isFirstOpen: true,
		isFirstDisabled: false
	};

}]);


app.controller("sportController", ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.msg = "Sports radio";
	//$scope.bg = '/img/background/02.jpg';

}]);


app.controller("moreController", ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.msg = "More";
    // $scope.f = $scope.infoClub[$routeParams.id]

}]);

