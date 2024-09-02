import Handlebars from 'handlebars'
import ExpressHandlebars from 'express-handlebars'
import app from './rotas.js'

const handlebars = ExpressHandlebars

// TEMPLATE ENGINE
app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
    runtimeOptions:
    {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}))
app.set('view engine', 'handlebars')

const ifCond = Handlebars.registerHelper('ifCond', function (v1,v2,options) 
{
    if (v1 == v2)
        return options.fn(this);
    else
        return options.inverse(this);
});

const hb = {}
hb.ifCond = ifCond
hb.handlebars = handlebars

export default hb