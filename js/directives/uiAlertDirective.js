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