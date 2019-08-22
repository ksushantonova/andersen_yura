import Server from './server';
    
const koa = {
    listen: jest.fn(),
    use: jest.fn(),
};

describe('server', () => {
    it('shows if koa have been inited', () => {
        const server = new Server(koa);
        server.start();

        expect(koa.listen).toHaveBeenCalledTimes(1);
    });
});