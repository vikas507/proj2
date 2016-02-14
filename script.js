var app = angular.module ("srinivas",['ngRoute'])

.config(['$routeProvider',function($routeProvider){

$routeProvider.
when('/value',{
	templateUrl:'value.html',
	controller:'mainController'

}).
when('/about',{
	templateUrl:'about.html',
	controller:'mainController'

}).when('/product',{
	templateUrl:'product.html',
	controller:'mainController'

}).when('/contact',{
	templateUrl:'contact.html',
	controller:'mainController'

}).
otherwise({redirectTo:'/value'})

}])

.controller('mainController',['$scope' ,function($scope){
	

}])
.controller('AboutController',['$scope' ,function($scope){
	

}])
.controller('ProductController',['$scope' ,function($scope){
	

}])
.controller('ContactController',['$scope' ,function($scope){
	

}]);