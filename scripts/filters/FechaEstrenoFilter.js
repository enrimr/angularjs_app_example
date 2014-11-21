angular
	.module("pelis")
	.filter("fechaEstrenoFilter", function($filter){

		return function(fecha){
			var nuevaFecha = $filter("date")(fecha, "dd/MM/yyyy");
			return "Se estrena en " + nuevaFecha;
		};

	});