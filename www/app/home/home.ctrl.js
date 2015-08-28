angular.module('pfcApp')
	.controller('HomeCtrl', [function(){
		var self= this;

		self.saludo="hola";

		self.alerta= function(msg){
			alert(msg);
		};
	}]);