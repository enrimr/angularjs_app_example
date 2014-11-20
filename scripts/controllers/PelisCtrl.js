angular
	.module("pelis")
	.controller("PelisCtrl", function($scope){

		$scope.lanzarBroadcast = function(){
			$scope.$broadcast("MiEvento", "Hola!!"); // Creamos un evento del scope para propagar hacia abajo
		};

		$scope.$on("MiOtroEvento", function(event, datos){
			alert(datos);
		})
	});