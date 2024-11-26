const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ADMIN_EMAIL = 'admin@admin';
const ADMIN_PASSWORD = 'admin';

const loginUser = async ({ email, password }) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        return {
            status: 200,
            data: { message: 'Login realizado com sucesso' },
        };
    }
    return {
        status: 401,
        data: { message: 'Credenciais inválidas' },
    };
};


const createPaciente = async ({ nome, idade, telefone, email, endereco, horario }) => {
    try {
        const paciente = await prisma.ClinicaOtica.create({
            data: { nome, idade, telefone, email, endereco, horario },
        });
        return {
            status: 201,
            data: paciente,
        };
    } catch (error) {
        console.error('Erro ao criar paciente:', error.message);
        return {
            status: 500,
            data: { message: 'Erro ao criar paciente' },
        };
    }
};

// Função para obter todos os pacientes
const getAllPacientes = async () => {
    try {
        const pacientes = await prisma.ClinicaOtica.findMany();
        return {
            status: 200,
            data: pacientes,
        };
    } catch (error) {
        console.error('Erro ao buscar pacientes:', error.message);
        return {
            status: 500,
            data: { message: 'Erro ao buscar pacientes' },
        };
    }
};

// Função para buscar um paciente por ID
const getPacienteById = async (id) => {
    try {
        const paciente = await prisma.ClinicaOtica.findUnique({
            where: { id: parseInt(id) },
        });

        if (!paciente) {
            return {
                status: 404,
                data: { message: 'Paciente não encontrado' },
            };
        }

        return {
            status: 200,
            data: paciente,
        };
    } catch (error) {
        console.error('Erro ao buscar paciente:', error.message);
        return {
            status: 500,
            data: { message: 'Erro ao buscar paciente' },
        };
    }
};

// Função para excluir um paciente
const deletePaciente = async (id) => {
    try {
        const paciente = await prisma.ClinicaOtica.findUnique({
            where: { id: parseInt(id) },
        });

        if (!paciente) {
            return {
                status: 404,
                data: { message: 'Paciente não encontrado' },
            };
        }

        await prisma.ClinicaOtica.delete({
            where: { id: parseInt(id) },
        });

        return {
            status: 200,
            data: { message: 'Paciente excluído com sucesso' },
        };
    } catch (error) {
        console.error('Erro ao excluir paciente:', error.message);
        return {
            status: 500,
            data: { message: 'Erro ao excluir paciente' },
        };
    }
};

module.exports = { getAllPacientes, getPacienteById, deletePaciente, createPaciente, loginUser };
