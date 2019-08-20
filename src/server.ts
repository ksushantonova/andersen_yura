export default class Server {
    koa: any
    port: number

    constructor(koa: any) {
        this.koa = koa;
        this.port = Number(process.env.PORT || 3000);
    }

    start() {
        this.init();
        this.koa.listen(this.port, () => {
            console.info(`Listening on http://localhost:${this.port}`);
        });
    }

    private init() {
        this.koa.use(async (ctx: any) => {
            ctx.body = "Hello wolrd";
        });
    }
}