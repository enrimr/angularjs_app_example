angular
    .module("pelis")
    .controller("IndexCtrl", function($scope, $routeSegment) {

        // Usamos esta función para comprobar si la ruta que se
        // navega en este momento empieza por 'pelis'; esto nos
        // servirá para seleccionar la pestaña de Películas cuando
        // así sea.
        $scope.rutaEsPeliculas = function() {

            return $routeSegment.startsWith("pelis");
        };

        // Igual que el anterior, solo que para el caso de la
        // pestaña de Series.
        $scope.rutaEsSeries = function() {

            return $routeSegment.startsWith("series");
        };

    });