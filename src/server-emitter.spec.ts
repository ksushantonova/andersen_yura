import ServerEmitter from './server-emitter';

class MockServerEmitter extends ServerEmitter {
  constructor() {
    super();
  }

  getEvents() {
    return this.events;
  }
}

const payload = {
  name: 'test1',
}

describe('emitter', () => {
  it('subscribe', () => {
    const serverEmitter = new MockServerEmitter();
    const fn = jest.fn();

    serverEmitter.subscribe('firstChannel', fn);
    expect(serverEmitter.getEvents()).toEqual({'firstChannel': fn});
  });

  it('unsubscribe', () => {
    const serverEmitter = new MockServerEmitter();
    const fn = jest.fn();

    serverEmitter.subscribe('firstChannel', fn);
    expect(serverEmitter.getEvents()).toEqual({'firstChannel': fn});

    serverEmitter.unsubscribe('firstChannel');
    expect(serverEmitter.getEvents()).toEqual({});

    serverEmitter.emit('firstChannel', payload);
    expect(fn).not.toHaveBeenCalled();
  });

  it('emit', () => {
    const serverEmitter = new MockServerEmitter();
    const fn = jest.fn((data) => data);

    serverEmitter.subscribe('firstChannel', fn);
    serverEmitter.emit('firstChannel', payload);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(serverEmitter.emit('firstChannel', payload)).toEqual(payload);
  });
});

