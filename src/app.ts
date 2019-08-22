import koa from 'koa';
import server from './server';

const app = new koa();
const httpServer = new server(app);
httpServer.start();
