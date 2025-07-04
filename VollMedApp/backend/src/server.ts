/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-misused-promises */
import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import rotaAuth from './auth/authRoutes.js'
import rotaAvaliacoes from './avaliacoes/avaliacoesRoutes.js'
import rotaClinica from './clinicas/clinicaRoutes.js'
import rotaConsulta from './consultas/consultaRoutes.js'
import { AppDataSource } from './data-source.js'
import errorMiddleware from './error/errorMiddleware.js'
import rotaEspecialista from './especialistas/especialistaRoutes.js'
import rotaPaciente from './pacientes/pacienteRoutes.js'
import rotaPlanoDeSaude from './planosDeSaude/planosDeSaudeRoutes.js'
import faltamVariaveisDeAmbiente from './utils/serverUtils.js'
import { resolve, dirname } from 'path'

const __filename = import.meta.url.substring(7)
const __dirname = dirname(__filename)

await faltamVariaveisDeAmbiente()

dotenv.config({ path: '.env' })

const app = express()

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST'
  ],

  allowedHeaders: [
    'Content-Type'
  ]
}

app.use(cors(corsOpts))

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // envio de arquivo
// app.use("/images", express.static(resolve(__dirname, '..', 'tmp', 'uploads')))
app.use(express.static("tmp"))

AppDataSource.initialize()
  .then(() => {
    console.log('App Data Source inicializado')
  })
  .catch((error) => {
    console.error(error)
  })

rotaPaciente(app)
rotaAuth(app)
rotaEspecialista(app)
rotaAvaliacoes(app)
rotaClinica(app)
rotaConsulta(app)
rotaPlanoDeSaude(app)
app.use(errorMiddleware)

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(process.env.SERVER_PORT, () => { console.log(`server running on port ${process.env.SERVER_PORT}`) }
)

export default app
