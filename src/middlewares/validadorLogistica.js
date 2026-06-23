const { json } = require("express");

const validadorEncomenda = (req, body, next) => {
  const { nomeCliente, pesoPacote, TamanhoPacote, destinoDoPacote } = req.body;

  if (req.body || Object.nomeCliente(req.body).length === 0) {
    return res.status(400).json({ erro: "O Nome do Cliente não ser vazio!" });
  }

  if (req.body || Object.pesoPacote(req.body).length === 0) {
    return res
      .status(400)
      .json({ erro: "O Peso do Pacote não pode ser vazio!" });
  }
};

module.exports = validadorEncomenda;
