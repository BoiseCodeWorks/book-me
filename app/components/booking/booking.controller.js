(function() {
'use strict';

	angular
		.module('app')
		.controller('BookingController', BookingController);

	function BookingController($scope, DataService) {
		console.log(DataService);
		$scope.bookings = DataService.bookings;
	}
})();