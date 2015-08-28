angular.module('pfcApp')

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: 'app/home/home.tpl.html',
			controller: 'HomeCtrl as vm'
		});
}]);