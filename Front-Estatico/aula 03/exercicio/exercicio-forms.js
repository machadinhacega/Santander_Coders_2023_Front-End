// seleciona o formulario com getElementById
// a função .addEventListener recebe 2 parâmetros:
// 1º: um alerta, que no caso é o "submit" (qndo o botao for disparado)
// 2º: uma função


// pra não atualziar a página por conta do "submit" no button

// pega o email pela id



// transforma em JSON


// vai dar undefined pq nao é mais um objeto e sim uma sting

// pra reutilizar "como objeto"



// document.getElementById("meuFormulario").addEventListener("submit", function(event){
//     event.preventDefault();
//     var name = document.getElementById("nome").value
//     console.log(name)
// })



{/* <script>
// seleciona o formulario com getElementById
// a função .addEventListener recebe 2 parâmetros:
    // 1º: um alerta, que no caso é o "submit" (qndo o botao for disparado)
    // 2º: uma função
document.getElementById("meuFormulario").addEventListener("submit", function(event){
    // pra não atualziar a página por conta do "submit" no button
    event.preventDefault();
    // pega o email pela id
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    
    var dados = {
        email: email,
        password: password,
    };
    // transforma em JSON
    const data = JSON.stringify(dados)

    localStorage.setItem("dadosFormulario", data)
    
    // vai dar undefined pq nao é mais um objeto e sim uma sting
    console.log(data.email)
    // pra reutilizar "como objeto"
    const dataResgatada = JSON.parse(data)
    console.log('Parse: ',dataResgatada.email)
})
</script> */}




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



// document.getElementById("meuFormulario").addEventListener("submit", function(event){
//     event.preventDefault();
//     var name = document.getElementById("nome").value
    
//     var dados = {
//         name: name,
//     };
//     // transforma em JSON
//     const data = JSON.stringify(dados)

//     localStorage.setItem("dadosFormulario", data)
    
//     console.log(data)
// })
