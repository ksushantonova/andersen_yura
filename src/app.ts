// import Koa from 'koa';
// import Server from './server';
import ServerEmitter from './server.emitter';

const serverEmitter = new ServerEmitter();

let callback = function(str: any){
  console.log(str);
}

serverEmitter.subscribe("firstEvent", callback);
serverEmitter.subscribe("secondEvent", callback);

serverEmitter.unsubscribe('firstEvent');
serverEmitter.emit('secondEvent', "Ksusha");

// const app = new Koa();

// const server = new Server(app);
// server.start();





