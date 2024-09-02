import Sequelize from 'sequelize'

const sequelize = new Sequelize
(
    'dimelfc', 
    'root', 
    '', 
    {
        host:'localhost',
        dialect:'mysql'
    }
)

const sqlz = {}
sqlz.Sequelize = Sequelize
sqlz.sequelize = sequelize

export default sqlz