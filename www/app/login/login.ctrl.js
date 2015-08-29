angular.module('pfcApp')
	.controller('LoginCtrl', ['UserService', function(UserService){

		var self=this;

		self.login= function(){
			UserService.login();
		};

		self.logout= function(){
			UserService.logout();
		};
		
	}]);