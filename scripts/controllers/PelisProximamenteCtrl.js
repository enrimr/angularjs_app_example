angular
	.module("pelis")
	.controller("PelisProximamenteCtrl", function($scope, $http, ApiService){
		$scope.$on("MiEvento", function(event, datos){
			alert(datos);
		});

		$scope.lanzarEmit = function(){
			$scope.$emit("MiOtroEvento", "Adios!!"); // Creamos un evento del scope para propagar hacia arriba
		};

		var api = "https://api.themoviedb.org/3/";
		var api_key = "826b523c417cbb888744b13031d846c2";
		var language = "es";
		$http.get(api + "movie/upcoming?api_key="+api_key+"&language="+language).then(
			// .get funciona con promesas, no con callbacks.
			// La primera función se ejecuta si todo ha ido bien
			function(datos){
				$scope.peliculas = datos.data.results;
			},
			// la segunda cuando ha habido un error
			function(){
				alert("Hubo un error");
			}
		);

		$scope.obtenerRutaImagen = function(path){
			return ApiService.rutaImagen(path, 45);
		};
	});