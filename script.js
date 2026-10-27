let nome = prompt('Qual é o seu nome?');
let idade = Number(prompt('Quantos anos você tem?'));

if (idade <= 11) {
  alert('Olá pequenino(a), Seja bem-vindo(a), ' + nome + '!');
} else if (idade >= 12 && idade <= 18) {
  alert('Olá, jovem, Seja muito bem-vindo(a), ' + nome + '!');
} else if (idade >= 19) {
  alert('Olá, Sr.(a) ' + nome + ', receba nossas boas-vindas!');
} else {
  alert(
    'Essa idade não está digitada corretamente. Por favor preencha os dados corretamente, utilize números inteiros por gentileza!'
  );
}
