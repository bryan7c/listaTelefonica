angular.module("listaTelefonica").directive("bbTable",function(){
	return {
		templateUrl: "view/table.html",
		scope: {
			lista : "=",
			titulo : "@"
		},
		replace: true,
		transclude: true,
		link: function(scope, element, attr){
			scope.mostrar = function(){
				alert("oi");
			}
		}
	}
});