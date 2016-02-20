(function() {
'use strict';

	angular
		.module('app')
		.controller('BookingController', BookingController);

	function BookingController($scope, Booking) {
		Booking.findAll();
		Booking.bindAll({}, $scope, 'bookings');
		// DataService.getBookings().success(function (data) {
		// 	console.log("Third")
		// 	$scope.bookings = data;
		// })
	}
})();