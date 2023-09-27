import { Usuario } from "../models/Usuario.js";
import { generarId } from "../helpers/generarId.js";

const registrar = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    const userSave = await usuario.save();
    res.json(userSave);
  } catch (error) {
    console.log(error);
  }
};

export { registrar };
