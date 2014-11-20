angular.module("pelis").service("ApiService", function() {

	this.rutaImagen = function(path, size){
		return "http://image.tmdb.org/t/p/w" + size + path;
	};
	
});