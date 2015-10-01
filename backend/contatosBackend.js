var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var contatos = [
  {
    "serial": "as&ˆ5",
    "nome": "Bruno Vigidio",
    "telefone": "9999-2222",
    "data": "2015-09-23T18:56:08.076Z",
    "operadora": {
      "nome": "Oi",
      "codigo": 14,
      "categoria": "Celular"
    }
  },
  {
    "serial": "a)(*0",
    "nome": "Sandra Rafael dos Santos",
    "telefone": "9999-3333",
    "data": "2015-09-23T18:56:08.076Z",
    "operadora": {
      "nome": "Vivo",
      "codigo": 15,
      "categoria": "Celular"
    }
  },
  {
    "serial": "(*&t$",
    "nome": "Mariana Freitas",
    "telefone": "9999-9999",
    "data": "2015-09-23T18:56:08.076Z",
    "operadora": {
      "nome": "Tim",
      "codigo": 41,
      "categoria": "Celular"
    }
  },
  {
    "nome": "Rafael augusto",
    "telefone": "98887-5874",
    "operadora": {
      "nome": "GVT",
      "codigo": 25,
      "categoria": "Fixo",
      "preco": 1
    },
    "serial": "J=D4M",
    "data": "2015-09-23T19:03:12.563Z"
  },
  {
    "nome": "Vanessa Olambra de Oliveira",
    "telefone": "98887-5874",
    "operadora": {
      "nome": "Vivo",
      "codigo": 15,
      "categoria": "Celular",
      "preco": 1
    },
    "serial": "LZ%3J",
    "data": "2015-09-23T19:06:43.151Z"
  },
  {
    "nome": "Jessica Bolshevit",
    "telefone": "98825-3587",
    "operadora": {
      "nome": "GVT",
      "codigo": 25,
      "categoria": "Fixo",
      "preco": 1
    },
    "serial": "+\">E!",
    "data": "2015-09-23T19:10:47.811Z"
  },
  {
    "nome": "Bruno de Oliveira",
    "telefone": "98825-3587",
    "operadora": {
      "nome": "GVT",
      "codigo": 25,
      "categoria": "Fixo",
      "preco": 1
    },
    "serial": "N1U5[",
    "data": "2015-09-23T19:11:02.704Z"
  },
  {
    "nome": "Fernanda Fagundes",
    "telefone": "98825-3587",
    "operadora": {
      "nome": "Vivo",
      "codigo": 15,
      "categoria": "Celular",
      "preco": 1
    },
    "serial": "^E_$G",
    "data": "2015-09-23T19:11:25.590Z"
  },
  {
    "nome": "Fonseca dos Santos",
    "telefone": "98874-6589",
    "operadora": {
      "nome": "Vivo",
      "codigo": 15,
      "categoria": "Celular",
      "preco": 1
    },
    "serial": "&4;M?",
    "data": "2015-09-23T19:16:48.573Z"
  },
  {
    "nome": "Thiago Lifer",
    "telefone": "9874-9568",
    "operadora": {
      "nome": "GVT",
      "codigo": 25,
      "categoria": "Fixo",
      "preco": 1
    },
    "serial": "K7W0B",
    "data": "2015-09-23T19:19:17.805Z"
  },
  {
    "nome": "Ana Marvilas",
    "telefone": "98547-9687",
    "operadora": {
      "nome": "Oi",
      "codigo": 14,
      "categoria": "Celular",
      "preco": 2
    },
    "serial": "(0?O%",
    "data": "2015-09-23T19:20:33.131Z"
  },
  {
    "nome": "Frederic Mustaf de Souza",
    "telefone": "98745-6587",
    "operadora": {
      "nome": "Tim",
      "codigo": 41,
      "categoria": "Celular",
      "preco": 3
    },
    "serial": "RTYOH",
    "data": "2015-09-23T19:21:00.373Z"
  }
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});
