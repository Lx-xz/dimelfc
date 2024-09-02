import sqlz from "./conexao.js";

const Jogador = sqlz.sequelize.define('jogadores',
{     
    foto: {type: sqlz.Sequelize.STRING},
    nome: {type: sqlz.Sequelize.STRING},
    sobrenome: {type: sqlz.Sequelize.STRING},
    apelido: {type: sqlz.Sequelize.STRING},
    posicao: {type: sqlz.Sequelize.STRING},
    numero: {type: sqlz.Sequelize.NUMBER},
    comentario: {type: sqlz.Sequelize.TEXT},
    contrato: {type: sqlz.Sequelize.STRING}
},
{
    timestamps: false
})

export default Jogador