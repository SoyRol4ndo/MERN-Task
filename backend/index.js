import express from "express";
import dotenv from "dotenv";

import { conectarBD } from "./config/db.js";
import { router } from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarBD();

// Routing
app.use("/api/usuarios", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
