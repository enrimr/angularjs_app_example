angular
	.module("pelis")
	.controller("SeriesHoyCtrl", function($scope){
		$scope.movies = [
			{
				title: "Juego de Tronos",
				channel: "CBO"
			},
			{
				title: "S.H.I.E.L.D.",
				channel: "Warener"
			}
		]};
	})