angular
	.module("pelis")
	.controller("PelisHoyCtrl", function($scope){
		$scope.$on("MiEvento", function(event, datos){
			alert(datos);
		});
	});