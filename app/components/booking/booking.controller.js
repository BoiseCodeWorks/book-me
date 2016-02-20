(function() {
'use strict';

	angular
		.module('app')
		.controller('BookingController', BookingController);

	function BookingController($scope, DataService) {
		$scope.bookings = [];
		
		console.log("First")

		DataService.getBookings().success(function (data) {
			console.log("Third")
			$scope.bookings = data;
		})

		console.log("Second")
	}
})();