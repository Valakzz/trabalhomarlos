import express from 'express'
import db from './database.js'

const server = express()
server.use(express.json())

server.listen(3000, () => {console.log("Entrando em contato com O servidor"), setTimeout(() =>{
  console.log("Servidor conectado com sucesso")
}, 3000)})