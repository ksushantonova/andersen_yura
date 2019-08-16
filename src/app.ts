import Koa from 'koa';

export const app = new Koa();

export const port: number = Number(process.env.PORT);

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, () => {
  console.log('server running on port ', port);
});
