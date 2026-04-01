alert('Seja bem-vindo! Prossiga para cadastrar um vinho.');

let nome = prompt('Digite o nome do vinho: ');
let tipo = prompt('Digite o tipo do vinho (Tinto, Branco, Rosé): ');
let safra = prompt('Digite a safra do vinho: ');
let quantidade = prompt('Digite a quantidade em estoque: ');


alert('Cadastro realizado com sucesso! A seguir, veja os detalhes do vinho no console.');

console.log('Detalhes do Vinho:');
console.log(`Nome: ${nome}`);
console.log(`Tipo: ${tipo}`);
console.log(`Safra: ${safra}`);
console.log(`Quantidade em estoque: ${quantidade}`);