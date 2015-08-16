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
			text : 'Statistics',
			icon : 'icon ion-arrow-graph-up-right',
			url : '#/app/statistics'
		},
		{
			text : 'About',
			icon : 'icon ion-person-stalker',
			url : '#/app/about'
		},
		
	]
});

app.controller('HomeCtrl', function($scope, $timeout, $ionicPopup){
	//timeout interval in ms
	$scope.tickInterval = 1000;
	$scope.actions = [
		{
			title : 'Check In',
			description : 'Are you sure you want to check in?',
			action : function(data) {
				$scope.showAlert(data)
			}
		},
		{
			title : 'Check Out',
			description : 'Are you sure you want to check out?',
			action : function(data) {
				$scope.showAlert(data);
			}
		}
	];

	//function to call in every interval
    var tick = function() {
    	$scope.currentDate = new Date();
        $scope.currentTime = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // An alert dialog
     $scope.showAlert = function(data) {
       var alertPopup = $ionicPopup.alert({
         title: data.title,
         template: data.description
       });       
     };

    // Start the timer
    $timeout(tick, $scope.tickInterval);

    // A confirm dialog
    $scope.showConfirm = function(id) {
       var confirmPopup = $ionicPopup.confirm({
         title: $scope.actions[id].title,
         template: $scope.actions[id].description
       });
       confirmPopup.then(function(res) {
         if(res) {
           $scope.actions[id].action($scope.actions[id]);
         }
       });
     };
});
app.controller('AboutCtrl', function($scope) {
	// body...
	
});

