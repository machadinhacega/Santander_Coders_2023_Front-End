// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
// que contém nome, nota1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno
// Ao final, imprimir o nome do aluno e a sua média

console.clear()

const listaDeAlunos = [
  { nome: "João", notas: [8, 7] },
  { nome: "Maria", notas: [9, 8] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9] },
  { nome: "Lúcia", notas: [8, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Juliana", notas: [10, 9] },
];

for (const aluno of listaDeAlunos) {
  somaNotas = 0
  for (let i = 0; i < aluno.notas.length; i++){
    somaNotas += aluno.notas[i]
  }
  aluno.media = somaNotas/aluno.notas.length
  
  if (aluno.media >= 7){
    aluno.aprovado = '✅'
  } else{
    aluno.aprovado = '❌'
  }

}


listaDeAlunos.forEach(aluno => {
  console.log(`${aluno.aprovado} ${aluno.nome}: ${aluno.media}`);
  console.log('------------------');
});