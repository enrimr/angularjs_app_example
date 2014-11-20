angular
	.module("pelis")
	.controller("PelisCtrl", function($scope, $http, $q, $timeout){

		//var api =  "http://tmdbapitest.appspot.com/api/";

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

		$scope.lanzarBroadcast = function(){
			$scope.$broadcast("MiEvento", "Hola!!"); // Creamos un evento del scope para propagar hacia abajo
		};

		$scope.$on("MiOtroEvento", function(event, datos){
			alert(datos);
		});

		// Objetos diferidos
		function diferido() {

			var deferred = $q.defer();

			$timeout(function() {
				deferred.resolve("Ya he terminado");
			}, 5000, false);

			return deferred.promise;
		}

		$scope.ejecutarPromesa = function(){

			diferido()
				.then(
				function(datos){
					alert("Bien: "+datos);
				},
				function(error){
					alert("Mal: "+error);
				}
			);

		};
	});