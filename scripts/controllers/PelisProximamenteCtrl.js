angular
	.module("pelis")
	.controller("PelisProximamenteCtrl", function($scope, $http, ApiService, Peliculas){
		$scope.$on("MiEvento", function(event, datos){
			alert(datos);
		});

		$scope.lanzarEmit = function(){
			$scope.$emit("MiOtroEvento", "Adios!!"); // Creamos un evento del scope para propagar hacia arriba
		};

		$scope.obtenerRutaImagen = function(path){
			return ApiService.rutaImagen(path, 45);
		};

		$scope.peliculas = Peliculas.data.results;
		/*ApiService.obtenerDatosApi("movie/upcoming").then(
			// .get funciona con promesas, no con callbacks.
			// La primera función se ejecuta si todo ha ido bien
			function(datos){
				$scope.peliculas = datos.data.results;
			},
			// la segunda cuando ha habido un error
			function(){
				alert("Hubo un error");
			}
		);*/

		$scope.verDetalle = function(){


		};
	});