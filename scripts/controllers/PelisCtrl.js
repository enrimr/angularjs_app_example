angular
	.module("pelis")
	.controller("PelisCtrl", function($scope, $http, $q, $timeout){

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