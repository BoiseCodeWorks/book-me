(function () {
	'use strict';

	angular
		.module('data', ['js-data'])
		.config(function (DSProvider, DSHttpAdapterProvider, DSFirebaseAdapterProvider) {
			DSHttpAdapterProvider.defaults.basePath = "http://jsonplaceholder.typicode.com";
			DSFirebaseAdapterProvider.defaults.basePath = "https://portal-boisecodeworks.firebaseio.com/";
		})
		.factory("Booking", function (DS) {
			return DS.defineResource({
				name: 'booking',
				endpoint: 'todos'
			})
		})
		// .factory('DataService', function ($http) {
		// 	return {
		// 		bookings: ["Booking 1", "Booking 2", "Booking 3", "Booking 4"],
		// 		getBookingById: function (id) {
		// 			return this.bookings[id];
		// 		},
		// 		getBookings: function () {
		// 			return $http.get("http://jsonplaceholder.typicode.com/todos")
		// 		}
		// 	}
		// });
})();