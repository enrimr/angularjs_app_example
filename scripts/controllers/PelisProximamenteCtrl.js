angular
	.module("pelis")
	.controller("PelisProximamenteCtrl", function($scope){
		$scope.movies = [
			{
				title: "The Matrix",
				room: 1,
				comprarEntrada: function(){
					alert("¡Entrada comprada! Horario: 13:00");
				},
				title: "Harry Potter 7: parte 2",
				room: 2,
				comprarEntrada: function(){
					alert("¡Entrada comprada! Horario: 13:10");
				},
				title: "Gru: mi villano favorito",
				room: 3,
				comprarEntrada: function(){
					alert("¡Entrada comprada! Horario: 12:45");
				}
			]
		};
	})