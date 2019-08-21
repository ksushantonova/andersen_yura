import ServerEmitter from './server.emitter';

jest.mock('./server.emitter');

export const callback = (str) => {
  return str;
};

export const testEvents = {
  "firstChannel": callback
};

describe ('emitter', () => {

  it('subscribe', () => {
    const serverEmitter = new ServerEmitter();

    serverEmitter.subscribe('firstChannel', callback);

    expect((serverEmitter.subscribe as any).mock.calls[0][0]).toEqual('firstChannel');
    expect(serverEmitter.subscribe).toHaveBeenCalledWith('firstChannel', callback);
    expect(serverEmitter.subscribe).toHaveBeenCalledTimes(1);
    // expect(serverEmitter.subscribe('firstChannel', callback)).toBe(testEvents);

  });

  it('unsubscribe', () => {
    const serverEmitter = new ServerEmitter();
    serverEmitter.unsubscribe('firstChannel');
    expect(serverEmitter.unsubscribe).toHaveBeenCalledWith('firstChannel');
    expect(serverEmitter.unsubscribe).toHaveBeenCalledTimes(1);
    // expect(serverEmitter.unsubscribe('firstChannel')).toBe(testEvents);

  });

  it('emit', () => {
    const serverEmitter = new ServerEmitter();
    serverEmitter.subscribe('firstChannel', callback);
    serverEmitter.emit('firstChannel', 'Ksusha');
    expect(serverEmitter.emit).toHaveBeenCalledWith('firstChannel', 'Ksusha');
    expect(serverEmitter.emit).toHaveBeenCalledTimes(1);
    // expect(serverEmitter.emit('firstChannel', 'Ksusha')).toBe('Ksusha');
  });
});

// ServerEmitter.prototype.subscribe = jest.fn();
// ServerEmitter.prototype.subscribe.mockImplementation(function(channel, event){
//   testEvents[channel] = event;
//   console.log(testEvents);
//   return testEvents;
// });
// ServerEmitter.prototype.unsubscribe = jest.fn();
// ServerEmitter.prototype.unsubscribe.mockImplementation(function(channel){
//   return testEvents;
// });
// ServerEmitter.prototype.emit = jest.fn();
// ServerEmitter.prototype.emit.mockImplementation(function(channel, payload){
//   return 'Ksusha';
// });

// const mockSubscribe = jest.fn();
// const mockUnSubscribe = jest.fn();
// const mockEmit = jest.fn();

// const mockSubscribe = jest.fn().mockImplementation(() => {
//   return testEvents;
// });
// const mockUnSubscribe = jest.fn().mockImplementation(() => {
//   return testEvents;
// });
// const mockEmit = jest.fn().mockImplementation(() => {
//   return 'emited';
// });
// const mockEvents = {};

// jest.mock('./server.emitter', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       subscribe: mockSubscribe,
//       unsubscribe: mockUnSubscribe,
//       emit: mockEmit,
//       events: mockEvents,
//     }
//   });
// });

// console.log(ServerEmitter.subscribe);

// jest.mock('./server.emitter', () => ({
//   default: 
//     class {
//       subscribe(channel, event) {
//         mockSubscribe(channel, event);
//       }
//       unsubscribe(channel){
//         mockUnSubscribe(channel);
//       }
//       emit(channel, payload){
//         mockEmit(channel, payload);
//       }    
//   }      
// })      
// // )

// beforeEach(() => {
//   mockSubscribe.mockClear();
//   mockUnSubscribe.mockClear();
//   mockEmit.mockClear();
// });

