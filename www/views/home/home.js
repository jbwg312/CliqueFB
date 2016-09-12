'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();
	var groupsRef = ref.child('groups');

	$scope.groups = [];
	groupsRef.on("value", function(snapshot){
		let data = snapshot.val();
		for(var key in data){
			let obj = {};
			obj.key = key;
			obj.groupData = data[key];
			$scope.groups.push(obj)
		}
		console.log($scope.groups);
	})

  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }

  $scope.profile = function () {
      $location.path("/profile");
  }
}
);
