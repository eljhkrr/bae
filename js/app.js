var app = angular.module('myApp', ['ui.bootstrap']);

app.controller("NavController", ["$scope", "$modal", function($scope, $modal){

	$scope.isCollapsed = true;

	$scope.toggleDropdown = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.status.isopen = !$scope.status.isopen;
	};

	$scope.showLoginForm = function(size){
		var modalInstance = $modal.open({
	      templateUrl: 'templates/LoginForm.html',
	      controller: modalInstanceCtrl,
	      size: size
	    });
	};

}]);

app.controller("FooterController", ["$scope", "$modal", function($scope, $modal){
	$scope.openTerms = function(size){
		var modalInstance = $modal.open({
	      templateUrl: 'templates/TermsModalContent.html',
	      controller: modalInstanceCtrl,
	      size: size,
	      backdrop: true
	    });
	};

	$scope.openPrivacyPolicy = function(size){
		var modalInstance = $modal.open({
	      templateUrl: 'templates/PrivacyPolicyContent.html',
	      controller: modalInstanceCtrl,
	      size: size,
	      backdrop: true
	    });
	};

	$scope.openFAQ = function(size){
		var modalInstance = $modal.open({
	      templateUrl: 'templates/FAQContent.html',
	      controller: modalInstanceCtrl,
	      size: size,
	      backdrop: true
	    });
	};

	
}]);

var modalInstanceCtrl = function($scope, $modalInstance){
	$scope.ok = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}

