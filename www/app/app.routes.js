angular.module('pfcApp')

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: 'app/home/home.tpl.html',
			controller: 'HomeCtrl as vm'
		})
		.state('login',{
			templateUrl: 'app/login/login.tpl.html',
			controller: 'LoginCtrl as vm'
		})
		.state('hePerdido',{
			templateUrl: 'app/secciones/hePerdido.tpl.html',
			controller: 'HePerdidoCtrl as vm'
		})
		.state('registro', {
			templateUrl: 'app/registro/registro.tpl.html',
			controller: 'RegistroCtrl as vm'
		})
}]);