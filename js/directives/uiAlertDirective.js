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
		transclude: true, //enviar o conteúdo de dentro da custon tag para dentro do template
		require: '', //uma diretiva requerida, com este campo setado é possivel utilizar o controller deta diretiva dentro do link
		/*	param (scope, element, attr, ctrl, transclude)
		 *	seta function para iniciacao da diretiva (capturar bind e setar coisas do scope)
		 */
		link: '',
		controller: '', //controller que será utilizado dentro do componente gerado pela diretiva
		controllerAs: '', //apelido para o controller, boa pratica para evitar o scope
	}
});

//############################
// DIRETIVA COM SUBDIRETIVA //
//############################
// angular.module("listaTelefonica").directive("uiAccordions",function(){
// 	return {
// 		controller: function($scope, $element, $attrs){
// 			var accordions = [];
//
// 			//Outra forma de implementação
// 			var registerAccordions = function(accordion){
// 			//this.registerAccordions = function(accordion){
// 				accordions.push(accordion);
// 			};
//
// 			//Outra forma de implementação
// 			var closeAllAccordions = function(){
// 			//this.closeAllAccordions = function(){
// 				accordions.forEach(function(_accordion){
// 					_accordion.isOpened = false;
// 				});
// 			};
//
// 			//Outra forma de implementação
// 			return {
// 				registerAccordions: registerAccordions,
// 				closeAllAccordions: closeAllAccordions
// 			}
// 		}
// 	};
// });
//
// angular.module("listaTelefonica").directive("uiAccordion",function(){
// 	return {
// 		templateUrl: "view/accordion.html",
// 		transclude: true,
// 		scope: {
// 			title: "@"
// 		},
// 		require: "^uiAccordions",
// 		link: function(scope, element, attrs, ctrl){
// 			ctrl.registerAccordions(scope);
// 			scope.open = function(){
// 				if(!scope.isOpened){
// 					ctrl.closeAllAccordions();
// 				}
// 				scope.isOpened = !scope.isOpened;
// 			}
// 		}
// 	}
// });
//############################
// DIRETIVA DE INTERCEPÇÃO  //
//############################
// angular.module("listaTelefonica").directive("uiDate",function($filter){
// 	return {
// 		require: "ngModel",
// 		link: function(scope, element, attrs, ctrl){
// 			var _formatDate = function(date){
// 				date = date.replace(/[^0-9]+/g, "");
// 				if(date.length > 2){
// 					date = date.substring(0,2) + "/" + date.substring(2);
// 				};
// 				if(date.length > 5){
// 					date = date.substring(0,5) + "/" + date.substring(5,9);
// 				};
// 				return date;
// 			};
//
// 			//captura de evento do elemento
// 			element.bind("keyup", function(){
// 				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
// 				ctrl.$render();
// 			});
//
// 			//interceptando valor antes de enviar para o scope
// 			ctrl.$parsers.push(function (value) {
// 				if (value.length === 10) {
// 					var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
// 					return new Date(value.replace(pattern,'$3-$2-$1')).getTime();
// 					// var dateArray = value.split("/");
// 					// return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
// 				}
// 			});
//
// 			//interceptando valor antes de printar na tala pelo ng-model
// 			ctrl.$formatters.push(function (value) {
// 				return $filter("date")(value, "dd/MM/yyyy");
// 			});
// 		}
// 	}
// });
