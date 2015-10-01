angular.module("listaTelefonica").directive("uiAlert",function(){
	return {
		templateUrl: "view/alert.html",
		replace: true,
		// A - atributo
		// E - elemento
		// C - class
		// M - comentário
		restrict: "E",
		// Isolamento do scope
		scope: {
			topic: "@title" //apenas o @ pois eles tem o mesmo nome
		},
		transclude: true
	}
});