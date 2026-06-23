const mongoose = require("mongoose");

const encomendaShema = new mongoose.Schema({
  nomeCliente: {
    type: String,
    required: true,
    trim: true,
  },

  pesoPacote: {
    type: Number,
    required: true,
    min: 0.01,
  },

  tamanhoPacote: {
    largura: { type: Number, required: true, min: 0.01 },
    altura: { type: Number, required: true, min: 0.01 },
    comprimento: { type: Number, required: true, min: 0.01 },
  },

  destinoDoPacote: {
    endereço: {
      cidade: { type: String, required: true, trim: true },
      estado: {
        type: String,
        required: true,
        minlength: [2, "O estado deve conter 2 caracteres"],
        maxlength: [2, "O estado deve conter 2 caracteres"],
      },
      cep: { type: String, required: true, trim: true }, // tem que ser String, o JS deleta o primeiro Zero. (tem como contornar???)
      rua: { type: String, required: true, trim: true },
      numero: { type: String, required: true, trim: true }, // caso nao tenha numero seja S/N tem que aceitar string.
    },
  },

  status: {
    type: String,
    required: true,
    enum: ["NO_GALPÃO", "RETIRADO_PARA_ENTREGA", "ENTREGUE"],
    default: "NO_GALPÃO",
  },
});

const encomendaModel = mongoose.model("encomenda", encomendaShema);
module.exports = encomendaModel;
