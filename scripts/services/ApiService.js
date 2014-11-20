angular.module("pelis").service("ApiService", function($http) {
	var api = "https://api.themoviedb.org/3/";
	var api_key = "826b523c417cbb888744b13031d846c2";
	var language = "es";

	this.rutaImagen = function(path, size){
		return path !== null
			? "http://image.tmdb.org/t/p/w" + size + path
			: null;
	};

	this.obtenerDatosApi = function(path){
		return $http.get(api + path + "?api_key=" + api_key + "&language=" + language);
	};

});