import Koa from 'koa';
import Server from './server';

const app = new Koa();
const server = new Server(app);
server.start();