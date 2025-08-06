import express from "express";
import agentesRouter from "./routes/agentesRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(agentesRouter);

app.listen(PORT, () => {
  console.log(
    `Servidor do Departamento de Polícia rodando em http://localhost:${PORT}`
  );
});
