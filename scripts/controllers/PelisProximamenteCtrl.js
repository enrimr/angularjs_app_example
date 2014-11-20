angular
	.module("pelis")
	.controller("PelisProximamenteCtrl", function($scope){
		$scope.$on("MiEvento", function(event, datos){
			alert(datos);
		});

		$scope.lanzarEmit = function(){
			$scope.$emit("MiOtroEvento", "Adios!!"); // Creamos un evento del scope para propagar hacia arriba
		};
	});