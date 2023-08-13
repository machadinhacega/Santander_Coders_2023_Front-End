/*
    Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).
    
    - Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes.
    - A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.
    - Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

    Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:
    
    1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

    2. Criar uma função para montar o corpo do e-mail a ser enviado.

    3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

    Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica diferente, que atenda ao solicitado.
*/

const enviarEmail = require("./envia-email")
console.clear()


emailsClientes = [
    {nome: 'Iza', email: 'izav.machado@gmail.com', newsletter: true},
    {nome:'Ivirson Daltro', email: 'ivirson@gmail.com', newsletter: false},
    {nome:'Bruno Cabral', email: 'brunocabral@gmail.com', newsletter: true}
]



// 1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.
const verificarDia = (dia) => {
    return (new Date().getDay() === dia ? true : false)
}
// 0 1 2 3 4 5 6
// D S T Q Q S S



// 2. Criar uma função para montar o corpo do e-mail a ser enviado.
// os novos veículos 
// os mais vendidos
// as condições para aquisição (sejam criativos)
const listaCarros = [
    {nome: 'Fiat Strada', vendidos: 50.526, ano:2018},
    {nome: 'Chevrolet Onix', vendidos: 44.110, ano:2019},
    {nome: 'VW Polo', vendidos: 37.722 , ano:2012},
    {nome: 'Chevrolet Onix Plus', vendidos: 35.726, ano:2020},
    {nome: 'Hyundai HB20', vendidos: 34.002, ano:2010},
    {nome: 'VW T-Cross', vendidos: 32.035, ano:2021},
    {nome: 'Fiat Argo', vendidos: 31.920, ano:2011},
    {nome: 'Fiat Mobi', vendidos: 30.442, ano:2008},
    {nome: 'Jeep Compass', vendidos: 30.350, ano:2023},
    {nome: 'Hyundai Creta', vendidos: 29.948, ano:2021},
]

const corpoEmail = (quantMaisVend, quantMaisNovos) => {

    const mais = (categoria, quantidade) => {
        const mais = [...listaCarros].sort((a,b) => b[categoria] - a[categoria])

        let listaMais = ''
        for (let i = 0; i < quantidade; i++) {
            listaMais += (`${mais[i].nome}\n`)
        }

        // Uma lista
        // const listaMais = []
        // for (let i = 0; i < quantidade; i++) {
        //     listaMais.push(mais[i].nome)
        // }

        return listaMais
    }

    const body = `
Meu parceiro eu não entendo p nenhuma de carro
Mas vamo fingir que tudo aqui é verdade:

Os ${quantMaisVend} carros mais vendidos são:
${mais('vendidos', quantMaisVend)}
Os ${quantMaisNovos} carros mais novos são:
${mais('ano', quantMaisNovos)}

As condições para aquisição só deus quais são.
Boa sorte e compre uma bicicleta.
`
return body
}




// 3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.
const subject = 'Amigos do Relâmpago Marquinhos'
const enviar = (dia, lista, quantMaisVend, quantMaisNovos) => {
    if(verificarDia(dia) === true){
        lista.forEach(cliente => {
            cliente.newsletter === true ? enviarEmail(cliente.email, subject, corpoEmail(quantMaisVend, quantMaisNovos)) : {}
        });
    }
    return
}




// Dia para enviar
// Lista de e-mails para enviar
// Quantidade de carros mais vendidos a ser mostrada
// Quantidade de carros mais novos a ser mostrada
enviar(6, emailsClientes, 3, 3)