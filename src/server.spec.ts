import server from './server';

const koa = {
  listen: jest.fn(),
  use: jest.fn(),
};

describe('server', () => {
  it('shows if koa have been inited', () => {
    const httpServer = new server(koa);
    httpServer.start();

    expect(koa.listen).toHaveBeenCalledTimes(1);
  });
});
