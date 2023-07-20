document.getElementById("meuFormulario").addEventListener("submit", function(event){
    event.preventDefault();
    
    var dados = {
        name: document.getElementById("nome").value,
        celular: document.getElementById("celular").value,
        nascimento: document.getElementById("nascimento").value,
        idade: document.getElementById("idade").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    }

    const data = JSON.stringify(dados)

    console.log(data)
      
    
})




