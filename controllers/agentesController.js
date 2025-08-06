import { randomUUID } from "crypto";
import {
  findAll,
  findById,
  create,
  update,
  patch,
  remove,
} from "../repositories/agentesRepository.js";

// GET /agentes
export function getAllAgentes(req, res) {
  res.json(findAll());
}

// GET /agentes/:id
export function getAgenteById(req, res) {
  const agente = findById(req.params.id);
  if (!agente) return res.status(404).json({ error: "Agente não encontrado" });
  res.json(agente);
}

// POST /agentes
export function createAgente(req, res) {
  const { nome, cargo, departamento } = req.body;
  if (!nome || !cargo || !departamento) {
    return res.status(400).json({ error: "Dados incompletos" });
  }
  const novoAgente = { id: randomUUID(), nome, cargo, departamento };
  create(novoAgente);
  res.status(201).json(novoAgente);
}

// PUT /agentes/:id
export function updateAgente(req, res) {
  const { nome, cargo, departamento } = req.body;
  if (!nome || !cargo || !departamento) {
    return res.status(400).json({ error: "Dados incompletos" });
  }
  const agenteAtualizado = update(req.params.id, { nome, cargo, departamento });
  if (!agenteAtualizado)
    return res.status(404).json({ error: "Agente não encontrado" });
  res.json(agenteAtualizado);
}

// PATCH /agentes/:id
export function patchAgente(req, res) {
  const agenteAtualizado = patch(req.params.id, req.body);
  if (!agenteAtualizado)
    return res.status(404).json({ error: "Agente não encontrado" });
  res.json(agenteAtualizado);
}

// DELETE /agentes/:id
export function deleteAgente(req, res) {
  const removedAgent = remove(req.params.id);
  if (removedAgent)
    return res.status(404).json({ error: "Agente não encontrado" });
  res.status(204).send();
}
