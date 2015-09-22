angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, uppercaseFilter, $http){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function(){
		$http.get('http://localhost:3412/contatos').success(function(data, status){
			$scope.contatos = data;
		}).error(function(data, status){
			$scope.message = "Aconteceu um problema: "+data;
		});
	}

	var carregarOperadoras = function(){
		$http.get('http://localhost:3412/operadoras').success(function(data, status){
			$scope.operadoras = data;
		}).error(function(data, status){
			$scope.message = "Aconteceu um problema: "+data;
		});
	}

    $scope.adicionarContato = function(contato){
    	$http.post('http://localhost:3412/contatos', contato).success(function(data, status){
    		//$scope.contatos.push(angular.copy(contato));
    		carregarContatos();
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
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