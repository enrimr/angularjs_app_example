angular.module("pelis", ["ngRoute"]);

angular.module("pelis").config(["$routeProvider", function($routeProvider)
{
	$routeProvider.when(
		"/pelis", {
			controllerUrl: "PelisCtrl", // Carga el controlador por nombre, mira en la pila de controladores
			templateUrl: "views/Pelis.html" // Busca la ruta en la raíz, por eso ponemos la ruta entera
		}
	);

	$routeProvider.when(
		"/series", {
			controllerUrl: "SeriesCtrl",
			templateUrl: "views/Series.html"
		}
	);
}])