angular.module('pfcApp')
	.controller('HomeCtrl',
				['$scope','$ionicModal', '$state','UserService',
				function($scope, $ionicModal, $state, UserService){

		var self= this;

		self.user= UserService.getUser();
		console.log(UserService.isLoggedin());

		self.alerta= function(msg){
			alert(msg);
		};

		self.openHePerdido= function(){
			if( UserService.isLoggedin() ){
				$state.go('hePerdido');
			} else {
				$state.go('login');
			}
		};


		
	}]);