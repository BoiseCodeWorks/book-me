(function() {
'use strict';

	angular
		.module('data', ['js-data'])
		.factory('DataService', function ($http) {
			return {
				bookings: ["Booking 1","Booking 2","Booking 3","Booking 4"],
				getBookingById: function (id) {
					return this.bookings[id];
				},
				getBookings: function () {
					return $http.get("http://jsonplaceholder.typicode.com/todos")
				}
			}
		});
})();