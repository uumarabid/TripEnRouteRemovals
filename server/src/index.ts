import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { contactRouter } from './routes/contact.js'
import { errorHandler } from './middleware/error-handler.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = Number(process.env.PORT ?? 5000)
const clientOrigin = process.env.CLIENT_ORIGIN ?? 'http://localhost:5173'

app.use(helmet())
app.use(
  cors({
    origin: clientOrigin,
    methods: ['GET', 'POST'],
  })
)
app.use(express.json({ limit: '32kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api/contact', contactRouter)

const clientDist = path.join(__dirname, '../../client/dist')
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist))
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      next()
      return
    }
    res.sendFile(path.join(clientDist, 'index.html'), (err) => {
      if (err) next()
    })
  })
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
