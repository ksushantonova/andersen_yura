import { app, port } from '../src/app';

test('port is not empty', () => {
    expect(port).toBeTruthy();
});

const mockListen = jest.fn();

app.listen = mockListen;

afterEach(() => {
  jest.clearAllMocks();
});

describe('app', () => {
  it('listen', async () => {
    expect(mockListen.mock.calls.length).toBe(1);
    expect(mockListen.mock.calls[0][0]).toBe(process.env.PORT || 3000);
  });
});

