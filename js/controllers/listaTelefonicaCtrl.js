angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, uppercaseFilter, contatosAPI, operadorasAPI, serialGenerator){
    $scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function(){
		contatosAPI.getContatos().success(function(data, status){
			$scope.contatos = data;
		}).error(function(data, status){
			$scope.erro = "Não foi possível carregar os dados!";
		});
	}

	var carregarOperadoras = function(){
		operadorasAPI.getOperadoras().success(function(data, status){
			$scope.operadoras = data;
            var master altaracao;
		}).error(function(data, status){
			$scope.erro = "Não foi possível carregar os dados!";
		});
	}

    $scope.adicionarContato = function(contato){
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
    	contatosAPI.saveContato(contato).success(function(data, status){
    		carregarContatos();
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            document.getElementById("nome").focus();
    	});
    }

    $scope.removerContato = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
        	return !contato.selecionado;
        });
    }

    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
        	return contato.selecionado;
        });
    }

    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.ordem = !$scope.ordem;
    }

    carregarContatos();
    carregarOperadoras();
});