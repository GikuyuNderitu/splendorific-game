const Koa = require('koa');
const ws = require('ws');
const bP = require('koa-bodyparser');
const initializeGame = require('./utils/gameLogic').initializeGame;
const PORT = process.env.PORT || 1337;

const app = new Koa();
app.use(bP())
require('./routes').setRoutes(app);

initializeGame();


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

