angular
    .module("pelis")
    .controller("PelisDetalleCtrl", function($scope, Pelicula) {
        $scope.pelicula = Pelicula.data;
    });