angular.module("pelis", ["ngRoute", "view-segment", "route-segment"]);

angular.module("pelis").config(["$routeSegmentProvider", function($routeSegmentProvider)
{
	$routeSegmentProvider.when("/pelis", "pelis"); // "ruta", "identificadorDelSegmento"
	$routeSegmentProvider.when("/series", "series");

	$routeSegmentProvider.segment("pelis", { // El primer parámetro es el identificador del segmento que queramos
		controller: "PelisCtrl", // Carga el controlador por nombre, mira en la pila de controladores
		templateUrl: "views/Pelis.html" // Busca la ruta en la raíz, por eso ponemos la ruta entera
	});

	$routeSegmentProvider.segment("series", {
		controller: "SeriesCtrl",
		templateUrl: "views/Series.html"
	});

}])