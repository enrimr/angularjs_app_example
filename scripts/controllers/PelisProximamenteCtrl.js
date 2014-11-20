angular
	.module("pelis")
	.controller("PelisProximamenteCtrl", function($scope){
		$scope.$on("MiEvento", function(event, datos){
			alert(datos);
		});
	});