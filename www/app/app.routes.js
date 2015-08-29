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
}]);