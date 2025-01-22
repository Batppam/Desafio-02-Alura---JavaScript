// Pergunte ao usuário qual é o dia da semana. 
// Se a resposta for "Sábado" ou "Domingo", 
//mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

alert('Bem vindo!');

let semana = prompt('Que dia da semana é hoje?');

if (semana == 'Sábado' || semana == 'Domingo'){

alert('Bom fim de semana!');}
else{alert('Boa semana');}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt('Escolha um número inteiro (Z)');
if (numero < 0){
    alert('Número Negativo');
}

else {
    alert('Número Positivo');
}

//Crie um sistema de pontuação para um jogo. 
// Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
// Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt('Digite sua pontuação:');

if (pontuacao > 100){
    alert('Parabéns, você venceu!');
}
else{
    alert('Tente novamente para ganhar.');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.

let saldo = prompt('Digite seu saldo:');
alert(`Saldo = ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. 
// Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt ('Digite seu nome:');
alert(`Boas-vindas ${nome}`);