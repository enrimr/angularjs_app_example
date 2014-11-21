angular
	.module("pelis")
	.filter("fechaEstrenoFilter", function(){

		return function(fecha){
			return "Se estrena en " + fecha;
		};

	});