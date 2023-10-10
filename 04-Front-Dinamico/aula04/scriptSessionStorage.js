// Session Storage: o browser reconhece uma 'sessao' como uma janela aberta. Se fechar e abrir acabou
// Local Storage

// const arrayAnimais = [];
const arrayAnimais = JSON.parse(sessionStorage.getItem("arrayAnimals")) || []
// const arrayAnimais = sessionStorage.getItem("arrayAnimals") ?? []
// const arrayAnimais = sessionStorage.getItem("arrayAnimals")?sessionStorage.getItem("arrayAnimals"):[] 


const today = (new Date()).toISOString().split("T")[0];
dataNascimento.max = today;

// CREATE
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { 
    nome: nome_animal,
    especie,
    peso,
    dataNascimento
  } = event.target;
  // nome = event.target.nome

  const novoAnimal = {
    nome: nome_animal.value,
    especie: especie.value,
    peso: peso.value,
    dataNascimento: dataNascimento.value
  };

  nomeError.innerText = "";
  espError.innerText = "";
  pesoError.innerText = "";
  dataError.innerText = "";
  
  if (novoAnimal.nome == "") {
    nomeError.innerText = "Nome é obrigatório";
    return;
  }

  if (novoAnimal.especie == "") {
    espError.innerText = "Espécie é obrigatória";
    return;
  }

  if (novoAnimal.peso == "") {
    pesoError.innerText = "Peso é obrigatório";
    return;
  } else if (parseFloat(novoAnimal.peso) <= 0) {
    pesoError.innerText = "Peso deve ser um valor acima de zero";
    return;
  }

  if (novoAnimal.dataNascimento == "") {
    dataError.innerText = "Data é obrigatória";
    return;
  } else if (novoAnimal.dataNascimento > today) {
    dataError.innerText = "Data não pode ser maior do que a data atual";
    return;
  }
  
  arrayAnimais.push(novoAnimal);
  
  console.log(arrayAnimais);

  // sessionStorage é uma variavel global
  sessionStorage.setItem("arrayAnimals", JSON.stringify(arrayAnimais))


  form.reset();
});

