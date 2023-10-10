// JSON.'desestringuificar'(localStorage.pegarItem(chave))
const arrayItens = JSON.parse(localStorage.getItem("arrayItens")) || [];


const atualizaLocalStorage = () => {
  // passar o array atualizado para o localStorage
  localStorage.setItem("arrayItens", JSON.stringify(arrayItens));
  // recarregar o banco
  location.reload();
}

// READ
// GET
arrayItens.forEach((item, index) => {
  const elem = document.createElement("div");
  elem.className = "elem";

  const nome = document.createElement("h3");
  nome.innerText = item.nome;
  nome.className = "";

  const quantidade = document.createElement("h4");
  quantidade.innerText = item.quantidade;
  quantidade.className = "";

  const validade = document.createElement("h4");
  validade.innerText = item.validade;
  validade.className = "";

  const tipo = document.createElement("h4");
  tipo.innerText = item.tipo;
  tipo.className = "";

  const img = document.createElement("img");
  img.src = item.img;
  img.height = '100';
  img.className = "";


  // EDIT
  // PUT
  let edit = false;
  // !!!!! AINDA NÃO EDITA,  SÓ ADD UM NOVO
  const btnEdit = document.createElement("button")
  btnEdit.className = "btnEdit"
  btnEdit.innerText = 'Editar'
  btnEdit.addEventListener("click", () => {
    // edit = true;
    // alert(`Editando ${item.nome}`)

    // // jogando pro input
    // nomeItem.value = item.nome;
    // imgItem.value = item.img;
    // quantItem.value = item.quantidade;
    // valItem.value = item.validade;
    // tipoItem.value = item.tipo;

    // atualizaLocalStorage()

  })


  // DELETE
  // DELETE
  const btnDel = document.createElement("button")
  btnDel.className = "btnDel"
  btnDel.innerText = 'Retirar'
  btnDel.addEventListener("click", () => {
    if (confirm(`Aqui só tira se for tudo. Vai comer tudo? ${index}`)) {
      arrayItens.splice(index, 1);
      atualizaLocalStorage()
    }
  })



  elem.append(nome, quantidade, validade, tipo, img, btnDel, btnEdit)
  geladeira.appendChild(elem)

});


const today = (new Date()).toISOString().split("T")[0];


// CREATE
// POST
formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();

  // lendo informações
  const novoItem = {
    nome: nomeItem.value.trim(),
    img: imgItem.value,
    quantidade: quantItem.value,
    validade: valItem.value,
    tipo: tipoItem.value,
  }

  // validando informações [erros]
  const infos = document.querySelectorAll(".inputItem");
  const erros = document.querySelectorAll(".errorMsg");
  for (let i = 0; i < infos.length; i++) {
    for (let j = 0; j < erros.length; j++) {
      if (infos[i].value == '') {
        erros[i].innerText = '*Campo obrigatório'
      } else {
        erros[i].innerText = ''
      }
    }
  }
  if (novoItem.quantidade <= 0 && novoItem.quantidade != '') {
    quantError.innerText += '*A quantidade deve ser maior que 0'
  }

  if (novoItem.validade < today && novoItem.validade != '') {
    valError.innerText += '*Não coloque coisas vencidas aqui, seu lixo'
  }

  for (err of erros) {
    if (err.innerText != '') {
      return
    }
  }

  arrayItens.push(novoItem)
  console.log(arrayItens)

  // localStorage.guardarItem(chave, valor)
  localStorage.setItem("arrayItens", JSON.stringify(arrayItens))


  // limpando o form
  formCadastro.reset()

  // recarregando o banco
  location.reload();

//   altera o pathname do location (aqui ta voltando pra url onde ta o arquivo principal - caso de 2 html)
//   window.location = "/"

})











// geladeira