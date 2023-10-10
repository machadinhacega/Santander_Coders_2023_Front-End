const arrayAnimais = 
JSON.parse(localStorage.getItem("arrayAnimals")) || []


arrayAnimais.forEach((animal, index) => {
    const container = document.querySelector(".container");
    // NÃO RECOMENDADO!! O INNER HTML É MTO LERDINHO E TEM O MESMO PROBLEMA DO EVAL
    // container.innerHTML += `
    // <div class="elem">
    // <img src="./animal_${index}.jpg" width="100">
    // <b>${animal.nome}</b>
    // </div>
    // `

    const elem = document.createElement("div");
    elem.className = "elem";
    
    const img = document.createElement("img");
    img.src = `./animal_${index}.jpg`;
    img.height = "100";
    // img.setAttribute("src", "")
    const name = document.createElement("b");
    name.innerText = animal.nome

    
    const btnDelete = document.createElement("button");
    btnDelete.innerText = 'Enviar'
    btnDelete.id = "delete"    
    
    btnDelete.addEventListener("click", ()=> {
        if (confirm("Você vai mesmo deletar essa nenem?")){
            arrayAnimais.splice(index, 1);
            localStorage.setItem("arrayAnimals", JSON.stringify(arrayAnimais))
            location.reload();
        }
    })

    elem.appendChild(img);
    elem.appendChild(name);
    // elem.append(img, name);
    elem.appendChild(btnDelete);

    container.appendChild(elem)

})
