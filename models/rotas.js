import multer from 'multer'
import express, { Router } from 'express'

import Jogador from './Jogador.js'
import { storage } from './multer.js'

const app = express()

app.use(express.static('./'))



////////// ROTAS ///////////

app.get('/', (req, res) =>
{
    res.render('index')
})

app.get('/times', (req, res) =>
{
    Jogador.findAll().then((jogadores)  => 
    {
        res.render('times', 
        {
            jogadores: jogadores
        })
    })
})

app.get('/jogos', (req, res) =>
{
    res.render('jogos')
})

////////// CONTROLE ///////////

app.get('/controle', (req, res) =>
{
    Jogador.findAll().then((jogadores)  => {
        res.render('controle', 
        {
            layout: 'admin',
            jogadores: jogadores
        })
    })
})

const upload = multer({ storage: storage })

app.post('/adJogador', upload.single('foto'), (req, res) =>
{
    Jogador.create
    ({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        apelido: req.body.apelido,
        posicao: req.body.posicao,
        numero: req.body.numero
    })
    .then(()=>
    {
        res.redirect ('/controle')
    })
    .catch((erro)=>
    {
        res.send("Houve um erro: " + erro)
    })
})

app.post('/altContrato', (req, res) =>
{
    res.send(req.body.status.name)
})

app.listen(8081, () =>
{
    console.log('Servidor Rodando!')
})

export default app