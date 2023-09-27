import express from "express";
import { registrar } from "../controllers/usuarioController.js";

export const router = express.Router();

// Autenticacion, Registro y Confirmacion
router.post("/", registrar);
