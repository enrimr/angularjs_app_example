angular.module("pelis", ["ngRoute", "view-segment", "route-segment"]);

angular.module("pelis").config(["$routeSegmentProvider", function($routeSegmentProvider)
{
	$routeSegmentProvider.when("/pelis", "pelis"); // "ruta", "identificadorDelSegmento"
	$routeSegmentProvider.when("/pelis/proximamente", "pelis.proximamente");
	$routeSegmentProvider.when("/pelis/hoy", "pelis.hoy");
	$routeSegmentProvider.when("/series", "series");
	$routeSegmentProvider.when("/series/proximamente", "series.proximamente");
	$routeSegmentProvider.when("/series/hoy", "series.hoy");

	$routeSegmentProvider.segment("pelis", { // El primer parámetro es el identificador del segmento que queramos
		controller: "PelisCtrl", // Carga el controlador por nombre, mira en la pila de controladores
		templateUrl: "views/Pelis.html" // Busca la ruta en la raíz, por eso ponemos la ruta entera
	});

	$routeSegmentProvider.within("pelis").segment("proximamente", { // El primer parámetro es el identificador del segmento que queramos
		controller: "PelisProximamenteCtrl", // Carga el controlador por nombre, mira en la pila de controladores
		templateUrl: "views/PelisProximamente.html" // Busca la ruta en la raíz, por eso ponemos la ruta entera
	});

	$routeSegmentProvider.within("pelis").segment("hoy", { // El primer parámetro es el identificador del segmento que queramos
		controller: "PelisHoyCtrl", // Carga el controlador por nombre, mira en la pila de controladores
		templateUrl: "views/PelisHoy.html" // Busca la ruta en la raíz, por eso ponemos la ruta entera
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

}])