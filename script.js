// 1. Considere o seguinte array:
// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
// 1290.00, 15000.00];

// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex
// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter
// const salarios = [
//   5000.0, 5460.5, 3452.0, 6900.0, 7590.1, 8012.99, 1290.0, 15000.0,
// ];

// console.log(salarios.findIndex((x) => x > 7500));
// console.log(salarios.filter((x) => x > 8000));

// 2. James estava criando uma array com as cores do arco-íris, e ele
// esqueceu algumas cores. As cores padrão de um arco-íris são
// normalmente listadas nesta ordem:
// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
// "Roxo"];

// mas James tinha isto:
// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:

// a. Remova "Preto"
// b. Adicione "Amarelo" e "Verde"
// c. Adicione "Roxo"
// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
// console.log(rainbow);
// rainbow.splice(2, 1);
// console.log(rainbow);
// rainbow.splice(2, 0, "Amerelo", "Verde");
// console.log(rainbow);
// rainbow.splice(rainbow.length, 0, "Roxo");
// console.log(rainbow);

// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa

// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000
const pessoas = [];
let continuar = true;

while (continuar) {
  let salario = 0;
  const nome = prompt("Digite o nome da pessoa:");
  const idade = Number(prompt("Digite a idade da pessoa:"));
  let trabalhando = confirm("Você está trabalhando?");
  if (trabalhando == true) {
    salario = Number(prompt("Digite o salario da pessoa:"));
    const pessoa = {
      nome,
      idade,
      trabalhando,
      salario,
    };
    pessoas.push(pessoa);
  } else {
    const pessoa = {
      nome,
      idade,
      trabalhando,
      salario,
    };
    pessoas.push(pessoa);
  }
  continuar = confirm("Você gostaria de adicionar outra pessoa?");
}
console.log("Pessoas desempregadas:");
pessoas
  .filter((p) => p.trabalhando == false)
  .forEach((p) => {
    console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Salário: ${p.salario}`);
  });
console.log("Pessoas empregadas com salários menores que 2500");
pessoas
  .filter((p) => p.salario < 2500 && p.trabalhando == true)
  .forEach((p) => {
    console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Salário: ${p.salario}`);
  });
console.log("Pessoas empregadas com salários maiores que 2500:");
pessoas
  .filter((p) => p.salario >= 2500)
  .forEach((p) => {
    console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Salário: ${p.salario}`);
  });
