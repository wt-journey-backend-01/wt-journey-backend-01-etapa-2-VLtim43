const agentes = [
  {
    id: "401bccf5-cf9e-489d-8412-446cd169a0f1",
    nome: "Rommel Carneiro",
    dataDeIncorporacao: "1992/10/04",
    cargo: "delegado",
  },
  {
    id: "a1f5d8e2-7c63-4d2e-aeb9-3c9e6b7d9e22",
    nome: "Helena Souza",
    dataDeIncorporacao: "2005/06/12",
    cargo: "investigadora",
  },
  {
    id: "f7b84cf3-6bc2-4f98-9b59-202baf2371c0",
    nome: "Carlos Mendes",
    dataDeIncorporacao: "2010/03/25",
    cargo: "escrivão",
  },
  {
    id: "9cf7b3ab-89b6-40a4-9b2a-0cb91f73a1f9",
    nome: "Larissa Rocha",
    dataDeIncorporacao: "2017/11/08",
    cargo: "perita",
  },
  {
    id: "c134bc1d-56c2-4952-83aa-ec1c5029f4de",
    nome: "Eduardo Lima",
    dataDeIncorporacao: "2000/01/15",
    cargo: "delegado",
  },
];

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
