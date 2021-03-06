import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import chalk from 'chalk'

dotenv.config()
const port = process.env.PORT || 8080
const server = express()

server.use(express.json())
server.use(cors())

// -------------------delete-this-test-route------------------------
server.get('/api/v1/test', (req, res) => res.json({ status: 'OK' }))
// -----------------------------------------------------------------

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.resolve('client/build')))
  server.get('/*', (req, res) => {
    res.sendFile(path.resolve('client/build/index.html'))
  })
}

server.listen(port, () => {
  console.log(chalk.yellow(`Server has been started on http://localhost:${port}.\nPlease press CTRL + C to stop the server`))
})
