// importando a biblioteca uuid para criar ids novas pra cada elemento
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// JSON.'desestringuificar'(localStorage.pegarItem(chave))
const arrayItens = JSON.parse(localStorage.getItem("arrayItens")) || [];

const atualizarLocalStorage = () => {
  // passar o array atualizado para o localStorage
  // localStorage.guardarItem(chave, valor)
  localStorage.setItem("arrayItens", JSON.stringify(arrayItens));
  // recarregar o banco
  location.reload();
}

const today = (new Date()).toISOString().split("T")[0];

let itemIndex = -1


btnAdd.addEventListener("click", () => {
  containerForm.className = "containerForm";
})

btnCancelar.addEventListener("click", () => {
  for (let erro of document.querySelectorAll(".errorMsg")) {
    erro.innerText = ''
  }
  formCadastro.reset()

  if (btnSave.value === 'Atualizar') {
    window.location = '/';
  }
  containerForm.className = "d-none";
  // ele demora mto, tou usando so pra sair da pagina do item
  // window.location = '/';

})

// CREATE
// POST
formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();

  // lendo informações
  const novoItem = {
    // cria um uuid novo
    id: uuidv4(),
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
  };
  if (novoItem.quantidade <= 0 && novoItem.quantidade != '') {
    quantError.innerText += '*A quantidade deve ser maior que 0'
  };

  if (novoItem.validade < today && novoItem.validade != '') {
    valError.innerText += '*Não coloque coisas vencidas aqui, seu lixo'
  };

  for (let err of erros) {
    if (err.innerText != '') {
      return
    }
  }

  if (itemIndex != -1) {
    arrayItens[itemIndex] = novoItem;
  } else {
    arrayItens.push(novoItem)
  }
  containerForm.className = "d-none";
  console.log(arrayItens)

  // limpando o form
  formCadastro.reset()

  atualizarLocalStorage()

  // volta do endereço inicial
  // window.location = '/';

})



// READ
// GET
arrayItens.forEach((item, index) => {
  const elem = document.createElement("div");
  elem.className = "elem";

  // const nome = document.createElement("h3");
  const nome = document.createElement("a");
  nome.innerText = item.nome;
  nome.className = "display-6";
  // add o id na url
  nome.href = `/?id=${item.id}`;


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
  // img.width = '100';
  img.className = "imgElemen";


  // EDIT
  const getItem = (id) => {
    if (id) {
      itemIndex = arrayItens.findIndex((it) => it.id === id);

      if (itemIndex == -1) return;

      const item = arrayItens[itemIndex];
      // jogando pro input
      containerForm.className = "containerForm";
      nomeItem.value = item.nome;
      imgItem.value = item.img;
      quantItem.value = item.quantidade;
      valItem.value = item.validade;
      tipoItem.value = item.tipo;

      btnSave.value = 'Atualizar'
    }
  }
  // // Essa parte tenho que rever pq ainda ficou um pouco confuso pra mim
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  getItem(id);



  // DELETE
  // DELETE
  const btnDel = document.createElement("button")
  btnDel.className = "btnDel"
  btnDel.innerText = 'Retirar'
  btnDel.className = "btn btn-outline-secondary"
  btnDel.addEventListener("click", () => {
    if (confirm(`Aqui só tira se for tudo. Vai comer tudo? ${index}`)) {
      arrayItens.splice(index, 1);
      atualizarLocalStorage();
    }
  })


  // READ2
  const btnMais = document.createElement("button")
  btnMais.className = "btnMais"
  btnMais.innerText = 'Ver mais'
  btnMais.className = "btn btn-outline-secondary"
  btnMais.addEventListener("click", () => {
    cardContainer.innerText = ""
    const cardItem = document.createElement("div");
    cardItem.className = "d-flex mt-5 ms-5"
    const nome = document.createElement("h3");
    nome.innerText = item.nome;
    const quant = document.createElement("h4");
    quant.innerText = item.quantidade;
    quant.className = "mx-3"
    const btnX = document.createElement("button")
    btnX.innerText = 'X'
    btnX.className = "btn btn-outline-secondary"
    btnX.addEventListener("click", () => {
      cardContainer.innerText = ""
    })

    cardItem.append(nome, quant, btnX);
    cardContainer.appendChild(cardItem)
  })

  elem.append(nome, quantidade, validade, tipo, img, btnDel, btnMais)

  geladeira.appendChild(elem)

});





// CARD
// cardContainer
// const viewItem = (id) => {
//   if (id) {
//     itemIndex = arrayItens.findIndex((it) => it.id === id);

//     if (itemIndex == -1) return;

//     const item = arrayItens[itemIndex];
//     // jogando pro input
//     nomeItem.value = item.nome;
//     imgItem.value = item.img;
//     quantItem.value = item.quantidade;
//     valItem.value = item.validade;
//     tipoItem.value = item.tipo;
//   }
// }



// arrayItens.forEach((item, index) => {

//   const cardItem = document.createElement("div");
//   cardItem.className = "d-flex mt-5 ms-5"

//   const nome = document.createElement("h3");
//   nome.innerText = item.nome;

//   const quant = document.createElement("h4");
//   quant.innerText = item.quantidade;
//   quant.className = "ms-3"

//   cardItem.append(nome, quant);
//   cardContainer.appendChild(cardItem)
// })

// const elem = document.createElement("div");
// elem.className = "elem";
//   elem.append(nome, quantidade, validade, tipo, img, btnDel)
