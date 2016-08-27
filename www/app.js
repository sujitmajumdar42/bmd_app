angular.module('bmd',[]);
angular.module('bmd').controller("DefaultController",DefaultController);
DefaultController.$inject = ['$http'];
function DefaultController($http){
	var vm = this;
	vm.title = "sample title";
	$http.get('http://bookmydine.herokuapp.com/user').then(function(response){
		vm.user = response.data;
	},function(err){
		
	});
}