const mongoose = require("mongoose");

const motoristaSchema = new mongoose.Schema({
  nomeMotorista: {
    type: String,
    required: true,
    trim: true,
  },

  veiculo: {
    veiculoModelo: { type: String, required: true, trim: true },
    veiculoPlaca: { type: String, required: true, trim: true },
    veiculoCapacidadeMax: { type: Number, required: true, min: 0.01 },
  },

  status: {
    type: String,
    required: true,
    enum: ["DISPONIVEL", "EM_ROTA", "INATIVO"],
    default: "DISPONIVEL",
  },
});

const motoristaModel = mongoose.model("motorista", motoristaSchema);
module.exports = motoristaModel;
