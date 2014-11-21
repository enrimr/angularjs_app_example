angular
	.module("pelis")
	.directive("listItem", function(ApiService){

		return {
			restrict: "AE",
			replace: true,
			templateUrl: "views/ListItem.html",
			scope: {
				peli: "="
			},
			link: function(scope){

				scope.obtenerRutaImagen = function(path){
					return ApiService.rutaImagen(path, 90);
				};
			}
		};
	});