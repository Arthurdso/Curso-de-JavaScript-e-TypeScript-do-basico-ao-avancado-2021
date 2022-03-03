const express = require('express')
const app = express();

//         CRIAR   LER   ATUALIZAR APAGAR
// CRUD -> CREATE, READ, UPDATE,   DELETE
//           POST  GET   PUT       DELETE

// http://meusite.com/ <- get -> entregue a página /
// http://meusite.com/sobre <- get -> entregue a página /sobre
// http://meusite.com/contato <- get -> entregue a página /contato

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome: <input type "text" Name="nome">
    <button>Enviar Formulario</button>
    </forn>
    `)
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato')
});

app.post('/', (req,res) => {
    res.send('Recebi os Formulario')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});