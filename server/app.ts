import * as Koa from 'koa';
const app = new Koa();

const port: number = Number(process.env.PORT);

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, () => {
  console.log('server running on port ', port);
});