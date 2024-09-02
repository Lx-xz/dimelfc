import bodyParser from 'body-parser'

import sqlz from './models/conexao.js'
import app from './models/rotas.js'
import hb from './models/handlebars.js'



// CONEXAO COM BD
sqlz.sequelize.authenticate().then(function()
{
    console.log ('Conectado com sucesso!')
}).catch(function(erro)
{
    console.log ('Falha ao se conectar: ' + erro)
})

// BODY PARSER
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
hb.handlebars

export default app