angular.module("pelis", ["ngRoute", "view-segment", "route-segment"]);

angular
	.module("pelis")
	.config(["$routeSegmentProvider", 
		"$routeProvider", 
		function($routeSegmentProvider, $routeProvider)
{
	$routeProvider.otherwise({
		redirectTo: "/pelis/proximamente"
	});

	$routeSegmentProvider.when("/pelis", "pelis"); // "ruta", "identificadorDelSegmento"
	$routeSegmentProvider.when("/pelis/proximamente", "pelis.proximamente");
	$routeSegmentProvider.when("/pelis/hoy", "pelis.hoy");
	$routeSegmentProvider.when("/pelis/detalle", "pelis.detalle");
	$routeSegmentProvider.when("/series", "series");
	$routeSegmentProvider.when("/series/proximamente", "series.proximamente");
	$routeSegmentProvider.when("/series/hoy", "series.hoy");

	$routeSegmentProvider.segment("pelis", { // El primer parámetro es el identificador del segmento que queramos
		controller: "PelisCtrl", // Carga el controlador por nombre, mira en la pila de controladores
		templateUrl: "views/Pelis.html" // Busca la ruta en la raíz, por eso ponemos la ruta entera
	});

	$routeSegmentProvider.within("pelis").segment("proximamente", {
		controller: "PelisProximamenteCtrl", 
		templateUrl: "views/PelisProximamente.html" ,
		resolve: {
			Peliculas:["ApiService", function(ApiService){
				return ApiService.obtenerDatosApi("movie/upcoming");
			}]
		}
	});

	$routeSegmentProvider.within("pelis").segment("hoy", { 
		controller: "PelisHoyCtrl", 
		templateUrl: "views/PelisHoy.html"
	});

	$routeSegmentProvider.within("pelis").segment("detalle", { 
		controller: "PelisDetalleCtrl", 
		templateUrl: "views/PelisDetalle.html",
		resolve: {
			Pelicula:["ApiService", "$routeParams", function(ApiService, $routeParams){
				var id = $routeParams.peliculaId;
				return ApiService.obtenerDatosApi("movie/"+id);
			}]
		}
	});

	$routeSegmentProvider.segment("series", {
		controller: "SeriesCtrl",
		templateUrl: "views/Series.html"
	});

	$routeSegmentProvider.within("series").segment("proximamente", {
		controller: "SeriesProximamenteCtrl",
		templateUrl: "views/SeriesProximamente.html"
	});

	$routeSegmentProvider.within("series").segment("hoy", {
		controller: "SeriesHoyCtrl",
		templateUrl: "views/SeriesHoy.html"
	});

}]);