// routes/pacienteRoutes.js
const express = require('express');
const { getAllPacientes, getPacienteById, deletePaciente, createPaciente } = require('./controllers/clinicaOticaController');
const router = express.Router();

// Rota para criar um paciente
router.post('/pacientes', async (req, res) => {
    const pacienteData = req.body;  // Pegando os dados do paciente do corpo da requisição
    const response = await createPaciente(pacienteData);
    res.status(response.status).json(response.data);
});

// Rota para obter todos os pacientes
router.get('/pacientes', async (req, res) => {
    const response = await getAllPacientes();
    res.status(response.status).json(response.data);
});

// Rota para buscar um paciente por ID
router.get('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const response = await getPacienteById(id);
    res.status(response.status).json(response.data);
});

// Rota para excluir um paciente
router.delete('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const response = await deletePaciente(id);
    res.status(response.status).json(response.data);
});

module.exports = router;
