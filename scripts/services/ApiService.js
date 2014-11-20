angular.module("pelis").service("ApiService", function() {

	this.rutaImagen = function(path, size){
		return path !== null
			? "http://image.tmdb.org/t/p/w" + size + path
			: null;
	};

});