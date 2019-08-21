const mockSubscribe = jest.fn();
const mockUnsubscribe = jest.fn();
const mockEmit = jest.fn();

const ServerEmitter = jest.fn().mockImplementation(() => {
  return {
    subscribe: mockSubscribe,
    unsubscribe: mockUnsubscribe,
    emit: mockEmit,
  }
});

export default ServerEmitter;