exports.paginaInicial = (req,res) => {
        res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" Name="qualquercoisa"><br>
        Outro campo: <input type="text" name="aquioutrocampo">
        <button>Olá Mundo</button>
        </form>
        `);
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST');
}