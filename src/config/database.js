const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);

    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao MongoBD", error);
  }
};

module.exports = connectToDatabase;
