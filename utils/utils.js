import { agentes } from "../repositories/agentesRepository.js";

// GET all
export function findAll() {
  return agentes;
}

// GET by ID
export function findById(id) {
  return agentes.find((agente) => agente.id === id);
}

// CREATE
export function create(agente) {
  agentes.push(agente);
  return agente;
}

// UPDATE (full)
export function update(id, newData) {
  const index = agentes.findIndex((a) => a.id === id);
  if (index === -1) return null;
  agentes[index] = { id, ...newData };
  return agentes[index];
}

// UPDATE (partial)
export function patch(id, partialData) {
  const index = agentes.findIndex((a) => a.id === id);
  if (index === -1) return null;
  agentes[index] = { ...agentes[index], ...partialData };
  return agentes[index];
}

// DELETE
export function remove(id) {
  const index = agentes.findIndex((a) => a.id === id);
  if (index === -1) return false;
  agentes.splice(index, 1);
  return true;
}
