angular
	.module("pelis")
	.controller("SeriesProximamenteCtrl", function($scope){
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