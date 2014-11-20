angular
	.module("pelis")
	.controller("PelisCtrl", function($scope, $http){

		//var api =  "http://tmdbapitest.appspot.com/api/";

		var api = "https://api.themoviedb.org/3/";
		var api_key = "826b523c417cbb888744b13031d846c2";
		var language = "es";
		$http.get(api + "movie/upcoming?api_key="+api_key+"&language="+language).then(
			function(datos){
				alert("Todo fue bien");
			},

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
	});