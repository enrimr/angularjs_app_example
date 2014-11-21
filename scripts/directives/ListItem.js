angular
	.module("pelis")
	.directive("listItem", function(){

		return {
			restrict: "AE",
			replace: true,
			templateUrl: "views/ListItem.html",
			scope: {
				peli: "="
			}
		};
	});