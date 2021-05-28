const combineRoutes = require('koa-combine-routers')
const aroutes = require('./aRouter')



module.exports = combineRoutes(
    aroutes
)