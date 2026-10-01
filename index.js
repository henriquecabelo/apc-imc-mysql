const express = require('express');
const db = require('./db');
require("dotenv")
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/imcpessoas', async(req, res) => {
  //res.send('Hello World!')
  try {
    
  } catch (error) {
    res.status(500).json({
        mensagem: "Erro ao buscar as pessoas no banco de dados.", detalhes: error.menssage
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})