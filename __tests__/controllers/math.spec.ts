import * as Koa from 'koa';
import * as Router from 'koa-router';
import axios from 'axios';

let server;

beforeAll(async () => {
    const app = new Koa();
    const router = new Router();

    // api routes
    require('../../src/routes')(router);
    app.use(router.routes());
    app.use(router.allowedMethods());

    server = app.listen(3000);

    console.log('Server running on port 3000');
});

afterAll(async () => {
    server.close();
});

describe('controllers/math.ts', () => {
    it('should add two numbers', async () => {
        let res = await axios.get('http://localhost:3000/api/users');
        expect(res.status).toBe(200);
        expect(res.data).toBe(30);
    });
});