import ServerEmitter from './server-emitter';

describe('emitter', () => {
  it('subscribe', () => {
    const serverEmitter = new ServerEmitter();
    const fn = jest.fn();

    serverEmitter.subscribe('firstChannel', fn);
    serverEmitter.emit('firstChannel', "Ksusha");
  });

  it('unsubscribe', () => {
    const serverEmitter = new ServerEmitter();
    const fn = jest.fn();

    serverEmitter.subscribe('firstChannel', fn);
    serverEmitter.emit('firstChannel', 'Ksusha');
    serverEmitter.unsubscribe('firstChannel');
    serverEmitter.emit('firstChannel', "Ksusha");

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("Ksusha");
  });
});

// написать тест на подписку
