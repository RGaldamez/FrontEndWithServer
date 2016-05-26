angular.module('AngularScaffold.Services').factory('authService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'mongodb://admin:admin@ds051848.mlab.com:51848/rgdbb';
		return {
				Logout: function(){
					return $http.get(baseUrl + "v1/logout");
				},
				Login: function(payload){
					return $http.post(baseUrl + "v1/login", payload);
				},
        Register: function(payload){
          return $http.post(baseUrl + "v1/register", payload);
        }
	    };
}]);
