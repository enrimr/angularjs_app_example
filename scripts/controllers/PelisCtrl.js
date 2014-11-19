angular
	.module("pelis")
	.controller("PelisCtrl", function($scope){
		$scope.movie = {
			title: "The Matrix",
			year: 1999
		};

		var serie = {
			title: "Breaking Bad",
			year: "A saber"
		};
	})