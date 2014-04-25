/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'TodoCtrl',
			templateUrl: 'app/pages/home.html'
		}).when('/:status', {
			controller: 'TodoCtrl',
			templateUrl: 'app/pages/home.html'
		}).when('/about', {
		   controller: 'aboutController',
		   templateUrl: 'app/pages/about.html'
	    }).when('/contact', {
		   templateUrl: 'app/pages/contact.html', 
		   controller: 'contactsController'
		}).otherwise({
			redirectTo: '/'
		});
	});
