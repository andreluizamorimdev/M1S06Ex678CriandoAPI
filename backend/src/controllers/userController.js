const { get } = require("../routes/userRoutes");

let users = [];

module.exports = {
    create(req, res) {
        const { nome, idade, cargo, senha } = req.body;

        if (!nome || !idade || !cargo || !senha) {
        res.status(406).json({ mensagem: "Está faltando dados para concluir a operação" });
        } else if (idade < 21) {
        res.status(400).json({ mensagem: "Usuário não possui idade suficiente" });
        } else {
        users.push({
            id: users.length + 1,
            nome,
            idade,
            cargo,
            senha
        });
        res.status(200).json({ mensagem: "Criado com sucesso" });
        console.log(users);
        }
      },

    delete(req, res) {
        const id = req.params.id;

        if (!id) {
            return res.status(406).json({ mensagem: 'Está faltando dados para concluir a operação' });
        }

        const userIndex = users.findIndex(user => user.id == id);

        if (userIndex < 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        users.splice(userIndex, 1);

        return res.status(200).json({ mensagem: 'Deletado com sucesso' });
    },

    getUsuarios(req, res) {
        return res.status(200).json({ users });
    }
}
