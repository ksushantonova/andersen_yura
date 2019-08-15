require('dotenv').config();

let a: number = 3;
console.log(a);

const Koa = require('koa');
const app = new Koa();

const port = process.env.PORT || 3000;

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, () => {
    console.log('server running on port ', port);
});