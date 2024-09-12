// 1
// const comida = ['arroz', 'feijão', 'batata', 'carne', 'frango'];
// comida.unshift('lasanha');
// console.log(comida)

// 2
// const meuArray = [];
// meuArray.push('3', '6', '9');
// console.log('Array original: ', meuArray);
// const dobro = meuArray.map(meuArray => meuArray * meuArray);
// console.log('Dobro dos valores: ', dobro)

// 3
// const alimentos = [];
// alimentos.push('Arroz', 'feijao', 'batata', 'frango')
// console.log('Eu comprei no mercado:', alimentos)

// 4
// const Clinica = [];
// Clinica.unshift('cachorro', 'Gato', 'Papagaio');

// console.log('Adicionado na Fila:', Clinica);

// for (let i = 0; Clinica.length > 0; i++) {
//     const atendido = Clinica.shift();
//     console.log('Atendendo: ', atendido),
//     console.log('F…
 // 1
// const comida = ['arroz', 'feijão', 'batata', 'carne', 'frango'];
// comida.unshift('lasanha');
// console.log(comida)

// 2
// const meuArray = [];
// meuArray.push('3', '6', '9');
// console.log('Array original: ', meuArray);
// const dobro = meuArray.map(meuArray => meuArray * meuArray);
// console.log('Dobro dos valores: ', dobro)

// 3
// const alimentos = [];
// alimentos.push('Arroz', 'feijao', 'batata', 'frango')
// console.log('Eu comprei no mercado:', alimentos)

// 4
// const Clinica = [];
// Clinica.unshift('cachorro', 'Gato', 'Papagaio');

// console.log('Adicionado na Fila:', Clinica);

// for (let i = 0; Clinica.length > 0; i++) {
//     const atendido = Clinica.shift();
//     console.log('Atendendo: ', atendido),
//     console.log('Flia restante: ', Clinica)
// }

// 5
// const livro = {
//     titulo: 'A Cabana',
//     autor: 'Gustavo Lima',
//     anoPublicado: 2010,
//     genero: 'Ação',
// }
// console.log("Informações do livro que eu gosto:", livro)


// 6

// Obtém o ano atual usando o objeto Date
// const anoAtual = new Date().getFullYear();

// // Define um objeto livro com várias propriedades e métodos
// const livro = {
//     titulo: 'A Cabana',
//     autor: 'Gustavo Lima',
//     anoPublicado: 2010,
//     genero: 'Ação',
//     // Método que calcula a idade do livro com base no ano atual e ano de publicação
//     idadePublicado() {
//         return anoAtual - this.anoPublicado;
//     },
//     // Método que retorna uma string com todos os detalhes do livro
//     mostrarDetalhes() {
//         return Título: ${this.titulo}\nAutor: ${this.autor}\nAno Publicado: ${this.anoPublicado}\nGênero: ${this.genero}\nIdade do Livro: ${this.idadePublicado()} anos;
//     }
// };
// // Chama o método mostrarDetalhes do objeto livro e exibe o resultado no console
// console.log(livro.mostrarDetalhes());

// 7

// // data atual 
// const anoAtual =  new Date().getFullYear();
// // informações do livrro
// const livro = {
//     titulo: 'O leão',
//     autor: 'Memphis Demae',
//     anoPublicacao: 2017,
//     genero: 'Ação',
//     idadePublicacao(){
//         return anoAtual - this.anoPublicacao;
//     }
// };
// // imprimir os dados 
// console.log(Titulo: ${livro.titulo}\nAutor: ${livro.autor}\nAno da Publicação: ${livro.anoPublicacao}\nGenêro: ${livro.genero}\nIdade da Publicação: ${livro.idadePublicacao()});

// 8

// codigo Do ano atual
// const anoAtual = new Date().getFullYear();
// // Informaçoes do livro
// const livro = {
//     titulo: 'O Batman',
//     autor: 'Gustavo Lima',
//     anoPublicacao: '2009',
//     genero: 'Ação',
//     avalicao: null,
//     idadePublicacao(){
//         return anoAtual - this.anoPublicacao;
//     }
// };
// // colocando valor no null
// if (livro.avalicao === null) {
//     livro.avalicao = "Muito bom"
// }else{
//     console.log("Este Livro já foi Avaliado.")
// };

// // imprimir os dados 
// console.log(Titulo: ${livro.titulo}\nAutor: ${livro.autor}\nAno de Publicação: ${livro.anoPublicacao}\nGenêro: ${livro.genero}\nAvaliação: ${livro.avalicao}\nIdade da Publicação: ${livro.idadePublicacao()})

// 9
// Obtém o ano atual usando o objeto Date
// const anoAtual = new Date().getFullYear();

// // Define um objeto livro com várias propriedades e métodos
// const livro = {
//     titulo: 'Carros', // Título inicial do livro
//     autor: 'Gustavo Lima', // Autor do livro
//     genero: 'Ação', // Gênero do livro
//     anoPublicacao: 1969, // Ano em que o livro foi publicado
//     // Método que calcula a idade da publicação com base no ano atual e ano de publicação
//     idadePublicacao() {
//         return anoAtual - this.anoPublicacao;
//     }
// };

// // Se o título do livro for 'Carros', altera para 'Batman'
// if (livro.titulo === 'Carros') {
//     livro.titulo = 'Batman'; // Atualiza o título para 'Batman'
// } else {
//     // Caso o título não seja 'Carros', exibe uma mensagem no console
//     console.log("O título do livro já foi mudado.");
// }

// // Exibe os detalhes do livro, incluindo o cálculo da idade da publicação
// // Note que a propriedade 'anoPublicacao' e o método 'idadePublicacao' são usados aqui
// console.log(Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno de Publicação: ${livro.anoPublicacao}\nGênero: ${livro.genero}\nIdade da Publicação: ${livro.idadePublicacao()} anos);

// 10
// Obtém o ano atual usando o objeto Date
// const anoAtual = new Date().getFullYear();

// // Define um objeto livro com várias propriedades e métodos
// const livro = {
//     titulo: 'Carros', // Título inicial do livro
//     autor: 'Gustavo Lima', // Autor do livro
//     genero: 'Ação', // Gênero do livro
//     anoPublicacao: 1969, // Ano em que o livro foi publicado
//     avaliacao: 'Muito bom', // Avaliação inicial do livro
//     // Método que calcula a idade da publicação com base no ano atual e ano de publicação
//     idadePublicacao() {
//         return anoAtual - this.anoPublicacao; // Calcula a idade do livro subtraindo o ano de publicação do ano atual
//     }
// };

// // Remove a propriedade 'avaliacao' do objeto livro
// delete livro.avaliacao;

// // Exibe o objeto livro após a remoção da propriedade 'avaliacao'
// // A saída mostrará o objeto sem a propriedade 'avaliacao'
// console.log(livro);

// 11
// const livro = {
//     titulo: 'Carros', // Título inicial do livro
//     autor: 'Gustavo Lima', // Autor do livro
//     genero: 'Ação', // Gênero do livro
//     anoPublicacao: 1969, // Ano em que o livro foi publicado
//     avaliacao: 'Muito bom', // Avaliação inicial do livro
//     // Método que calcula a idade da publicação com base no ano atual e ano de publicação
//     idadePublicacao() {
//         return anoAtual - this.anoPublicacao; // Calcula a idade do livro subtraindo o ano de publicação do ano atual
//     }
// };

// // mudando o genero do livro
// livro.genero = 'Comédia'
// // imprimir os dados
// console.log(livro)

// 12
// const pessoa = {
//     nome: "Bruce Banner",
//     dataNascimento: "25/01/1980",
//     carteiraIdentidade: "997776-X",
//     email: "profbanner@email.com",
//     telefone: "+552877776666",
//     cidade: "Cachoeiro de Itapemirim",
//     estado: "ES"
// };

// // Adiciona os campos 'seguroSocial' e 'cpf' ao objeto pessoa
// pessoa.seguroSocial = '123-45-6789';
// pessoa.cpf = '38604532095';

// // Função para extrair os primeiros 4 dígitos de uma string
// function obterPrimeirosDigitos(numero) {
//     return numero.slice(0, 4);
// }

// // Exibe as informações da pessoa, com os 4 primeiros dígitos de CPF e carteira de identidade
// console.log(Nome: ${pessoa.nome});
// console.log(Data de Nascimento: ${pessoa.dataNascimento});
// console.log(Carteira de Identidade: ${obterPrimeirosDigitos(pessoa.carteiraIdentidade)});
// console.log(Email: ${pessoa.email});
// console.log(Telefone: ${pessoa.telefone});
// console.log(Cidade: ${pessoa.cidade});
// console.log(Estado: ${pessoa.estado});
// console.log(Seguro Social: ${pessoa.seguroSocial});
// console.log(CPF: ${obterPrimeirosDigitos(pessoa.cpf)});

// 13

// const estudante = {
//     Nome: 'Gustavo Henrique Souza Lima',
//     Matrícula: 2024,
//     Curso: 'Engenheiro da Computação', 
//     Matérias: 'Computador',

// }

//  14
// const pessoa = {
//     nome: 'Pedrao do Grau', 
//     idade: 21,
//     solteiro: true,
//     hobbies: ['Jogar Bola', 'Ler', 'Cantar', 'Dançar'],
// };

// function mostrarInfoPessoa(objeto) {
//     infoPessoa = {
//         nome: "Tipo da variável: " + typeof objeto.nome + "=" + objeto.nome,
//         idade: "Tipo da variável: " + typeof objeto.idade + "||" + objeto.idade,
//         solteiro: "Tipo da variável: " + typeof objeto.solteiro + "||" + objeto.solteiro,
//     };

//     if (typeof objeto.hobbies === "object") {
//         tipoHobbies = "array";
//     } else {
//         tipoHobbies = typeof objeto.hobbies;
//     }

//     infoPessoa.hobbies = "Tipo da variável:" + tipoHobbies + "||" + objeto.hobbies;

//     return console.log(infoPessoa);
// }
// // Chama a função para mostrar as informações da pessoa
// mostrarInfoPessoa(pessoa);

// // Exibe o objeto atualizado pessoa no console
// console.log(mostrarInfoPessoa);

// 15
// const pessoa = {
//     nome: 'Pedrao do Grau',
//     idade: 21,
//     solteiro: true,
//     hobbies: ['Jogar Bola', 'Ler', 'Cantar', 'Dançar'],
// };

// function mostrarInfoPessoa(objeto) {
//     infoPessoa = {
//         nome: "Tipo da variável: " + typeof objeto.nome + "=" + objeto.nome,
//         idade: "Tipo da variável: " + typeof objeto.idade + "||" + objeto.idade,
//         solteiro: "Tipo da variável: " + typeof objeto.solteiro + "||" + objeto.solteiro,
//     };

//     if (typeof objeto.hobbies === "object") {
//         tipoHobbies = "array";
//     } else {
//         tipoHobbies = typeof objeto.hobbies;
//     }

//     infoPessoa.hobbies = "Tipo da variável:" + tipoHobbies + "||" + objeto.hobbies;

//     return console.log(infoPessoa);
// }

// pessoa.rua = 'Carlos Lacerda';
// pessoa.cidade = 'Campinas';
// pessoa.estado = 'São Paulo';

// // Chama a função para mostrar as informações da pessoa
// mostrarInfoPessoa(pessoa);

// // Exibe o objeto atualizado pessoa no console
// console.log(mostrarInfoPessoa);

// 16

// informaçoes das pessoas 
// const pessoas = [
//     {
//         nome: 'Gustavo',
//         idade: 19,
//         cidade: 'Campinas',
//     },
//     {
//         nome: 'Gislene',
//         idade: 56,
//         cidade: 'Campinas',
//     },
//     {
//         nome: 'Roger',
//         idade: 36,
//         cidade: 'Campinas',
//     },
//     {
//         nome: 'Jaque',
//         idade: 28,
//         cidade: 'Campinas',
//     },
//     {
//         nome: 'Isabella',
//         idade: 18,
//         cidade: 'Campinas',
//     },
//     {
//         nome: 'Giovana',
//         idade: 57,
//         cidade: 'Campinas',
//     },
// ];

// // imprimir os dados
// console.log(pessoas);

// 17
// calcularadora
// const calculadora = {
//     soma: function(a, b) {
//         return a + b;
//     },
//     subtracao: function(a, b) {
//         return a - b;
//     },
//     multiplicacao: function(a, b) {
//         return a * b;
//     },
//     divisao: function(a, b) {
//         if (b === 0) {
//             return 'Impossível dividir pois o número é zero !!!';
//         } else {
//             return a / b;
//         }
//     },
//     calcularMedia: function(numeros) {
//         if (numeros.length === 0) {
//             return 'Lista vazia';
//         } else {
//             const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
//             const media = soma / numeros.length;
//             return media;
//         }
//     }
// };

// // Testar cada método e imprimir resultados
// console.log('Soma: ', calculadora.soma(7, 3)); 
// console.log('Subtração: ', calculadora.subtracao(7, 3)); 
// console.log('Multiplicação: ', calculadora.multiplicacao(7, 3)); 
// console.log('Divisão: ', calculadora.divisao(7, 3)); 
// console.log('Divisão por zero: ', calculadora.divisao(7, 0)); 

// // Chamar a função calcularMedia passando um array de números e imprimir o resultado
// const numeros = [15, 30, 54, 65, 38];
// console.log('Média: ', calculadora.calcularMedia(numeros)); // Aproximadamente 40.4


// // 18
// // Criar o objeto contaBancaria
// const contaBancaria = {
//     titular: 'João Silva',
//     saldo: 1000,
//     depositar: function(valor) {
//         if (valor > 0) {
//             this.saldo += valor;
//             console.log(Depósito de R$${valor} realizado com sucesso.);
//         } else {
//             console.log('O valor do depósito deve ser positivo.');
//         }
//     },
//     sacar: function(valor) {
//         if (valor > 0) {
//             if (valor <= this.saldo) {
//                 this.saldo -= valor;
//                 console.log(Saque de R$${valor} realizado com sucesso.);
//             } else {
//                 console.log('Saldo insuficiente para o saque.');
//             }
//         } else {
//             console.log('O valor do saque deve ser positivo.');
//         }
//     }
// };

// // Criar o objeto cliente
// const cliente = {
//     nome: 'Ana Costa',
//     conta: contaBancaria
// };

// // Função para mostrar o saldo
// function mostrarSaldo(cliente) {
//     console.log(Cliente: ${cliente.nome});
//     console.log(Saldo: R$${cliente.conta.saldo});
// }

// // Testar operações de depósito e saque
// contaBancaria.depositar(500); // Depositar R$500
// contaBancaria.sacar(200); // Sacar R$200
// contaBancaria.sacar(1500); // Tentar sacar R$1500, deve falhar por saldo insuficiente

// // Mostrar saldo atualizado
// mostrarSaldo(cliente);

// // Testar depósitos e saques com valores inválidos
// contaBancaria.depositar(-50); // Tentar depositar valor negativo
// contaBancaria.sacar(-100); // Tentar sacar valor negativo