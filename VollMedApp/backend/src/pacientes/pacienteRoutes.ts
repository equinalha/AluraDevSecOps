/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { verificaTokenJWT } from '../auth/middlewares/authMiddlewares.js'

import multer from 'multer'
import { Role } from '../auth/roles.js'
import multerConfig from '../config/multer.js'
import { criaImagem, destroiImagem, listaImagemPaciente } from './PacienteImagemController.js'
import {
  atualizarEnderecoPaciente,
  consultaPorPaciente,
  atualizarPaciente,
  criarPaciente,
  desativaPaciente,
  exibeTodosPacientes,
  lerPaciente,
  listaConsultasPaciente
} from './pacienteController.js'

import { query, matchedData, validationResult } from 'express-validator'

const upload = multer(multerConfig)

export const pacienteRouter = Router()

pacienteRouter.get('/', exibeTodosPacientes)
// Usando express Validator para sanitizar dados de entrada
pacienteRouter.get('/consulta-por-paciente', query('userInput').isString().isLength({ min: 2, max: 80 }).trim().escape(),
  (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).send(
        'Erro nos dados de entrada! O campo de pesquisa deve ser uma String, ter no mínimo 2 e no máximo 80 caractéres e não conter espaços ou os caractéres =, <, > e ?'
      );
    }
    next()
  }, consultaPorPaciente)
pacienteRouter.post('/', criarPaciente)
pacienteRouter.get('/:id', lerPaciente)
pacienteRouter.get('/:id/consultas', listaConsultasPaciente)
pacienteRouter.put('/:id', verificaTokenJWT(Role.paciente), atualizarPaciente)
pacienteRouter.delete(
  '/:id',
  verificaTokenJWT(Role.paciente),
  desativaPaciente
)
pacienteRouter.patch(
  '/:id',
  verificaTokenJWT(Role.paciente),
  atualizarEnderecoPaciente
)

pacienteRouter.post(
  '/:id/images',
  upload.single('file'),
  criaImagem
)

pacienteRouter.get(
  '/:id/images',
  upload.single('file'),
  listaImagemPaciente
)

pacienteRouter.delete(
  '/:id/images',
  verificaTokenJWT(Role.paciente),
  destroiImagem
)

export default (app) => {
  app.use('/paciente', pacienteRouter)
}
