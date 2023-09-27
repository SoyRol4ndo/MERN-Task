import mongoose from "mongoose";

const conectarBD = async () => {
  const url = process.env.MONGO_URI;
  try {
    const connection = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const data = `${connection.connection.host}: ${connection.connection.port}`;
    console.log(`MongoBD conectado en :${data}`);
  } catch (error) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
};

export default conectarBD;
