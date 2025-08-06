import { Router } from "express";
import {
  getAllAgentes,
  getAgenteById,
  createAgente,
  updateAgente,
  patchAgente,
  deleteAgente,
} from "../controllers/agentesController.js";

const router = Router();

router.get("/agentes", getAllAgentes);
router.get("/agentes/:id", getAgenteById);
router.post("/agentes", createAgente);
router.put("/agentes/:id", updateAgente);
router.patch("/agentes/:id", patchAgente);
router.delete("/agentes/:id", deleteAgente);

export default router;
