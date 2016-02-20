(function() {
'use strict';

	angular
		.module('app')
		.controller('BookingController', BookingController);

	function BookingController($scope, DataService) {
		$scope.name = "Booking Controller..."
	}
})();