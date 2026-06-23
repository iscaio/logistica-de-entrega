const mongoose = require("mongoose");

const encomendaShema = new mongoose.Schema({
  nomeCliente: {},

  pesoPacote: {
    type: Number,
    required: true,
    min: 0.01,
  },

  tamanhoDoPacote: {
    altura: { type: Number, required: true, min: 0.01 },
    largura: { type: Number, required: true, min: 0.01 },
    profundidade: { type: Number, required: true, min: 0.01 },
  },

  destinoDoPacote: {
    estado: {},
    cidade: {},
    cep: {},
  },

  status: {
    type: String,
    required: true,
    enum: {},
  },
});

const encomendaModel = mogoose.model("encomenda", encomendaShema);
module.exports = encomendaModel;
