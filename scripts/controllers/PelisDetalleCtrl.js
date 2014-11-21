angular
    .module("pelis")
    .controller("PelisDetalleCtrl", function($scope, Pelicula, ApiService) {
        $scope.pelicula = Pelicula.data;

        $scope.obtenerRutaImagen = function(path){
            return ApiService.rutaImagen(path, 396);
        };
    });