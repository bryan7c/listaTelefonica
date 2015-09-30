angular.module("listaTelefonica").directive("uiAccordions",function(){
	return {
		controller: function($scope, $element, $attrs){
			var accordions = [];

			//Outra forma de implementação
			var registerAccordions = function(accordion){
			//this.registerAccordions = function(accordion){
				accordions.push(accordion);
			};

			//Outra forma de implementação
			var closeAllAccordions = function(){
			//this.closeAllAccordions = function(){
				accordions.forEach(function(_accordion){
					_accordion.isOpened = false;
				});
			};

			//Outra forma de implementação
			return {
				registerAccordions: registerAccordions,
				closeAllAccordions: closeAllAccordions
			}
		}
	};
});

angular.module("listaTelefonica").directive("uiAccordion",function(){
	return {
		templateUrl: "view/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "^uiAccordions",
		link: function(scope, element, attrs, ctrl){
			ctrl.registerAccordions(scope);
			scope.open = function(){
				if(!scope.isOpened){
					ctrl.closeAllAccordions();
				}
				scope.isOpened = !scope.isOpened;
			}
		}
	}
});