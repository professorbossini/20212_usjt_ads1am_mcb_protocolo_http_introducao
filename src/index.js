const http = require ('http')
const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
app.use(bodyParser.json())

let id = 3
let alunos = [
    {
        id: 1,
        nome: 'João',
        fone: '11223344',
        email: 'joao@email.com'
    },
    {
        id: 2,
        nome: 'Maria',
        fone: '55221133',
        email: 'maria@email.com'
    }
]
const porta = 3000
app.set('port', porta)
const server = http.createServer(app)
server.listen(porta)
//localhost:3000/alunos
app.post('/alunos', (req, res) => {
    id = id + 1
    const aluno = {
        id: id,
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email
    }
    alunos.push(aluno)
    res.status(201).json(aluno)
})

app.get ('/alunos', (req, res) => {
    res.status(200).json(alunos)
})
