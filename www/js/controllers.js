var app = angular.module('starter.controllers', []);

app.controller('MenuCtrl', function($scope){
	$scope.menu = [
		{
			text : 'Home',
			icon : 'icon ion-home',
			url : '#/app/home'
		},
		{
			text : 'Records',
			icon : 'icon ion-document-text',
			url : '#/app/records'
		},
		{
			text : 'About',
			icon : 'icon ion-person-stalker',
			url : '#/app/about'
		},
		
	]
});

app.controller('HomeCtrl', function($scope, $timeout){
	//timeout interval in ms
	$scope.tickInterval = 1000;

	//function to call in every interval
    var tick = function() {
    	$scope.currentDate = new Date();
        $scope.currentTime = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
});
app.controller('AboutCtrl', function($scope) {
	// body...
	
});

