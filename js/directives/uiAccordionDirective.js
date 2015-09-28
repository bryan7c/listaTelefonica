angular.module("listaTelefonica").directive("uiAccordions",function(){
	return {
		controller: function($scope, $element, $attrs){
			var accordions = [];
			this.registerAccordions = function(accordion){
				accordions.push(accordion);
				console.log(accordions);
			};

			this.closeAllAccordions = function(){
				accordions.forEach(function(_accordion){
					_accordion.isOpened = false;
				});
			};
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
				ctrl.closeAllAccordions();
				scope.isOpened = true;
			}
		}
	}
});