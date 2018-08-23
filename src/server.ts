import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as cache from 'koa-redis-cache';
import * as session from 'koa-session';
import RedisStore = require('koa2-session-redis');

const app = new Koa();
const router = new Router();

const routeOptions: Array<cache.RouteOptions> = [
    {
      route: '/api/test',
      expire: 60
    },
    {
      route: '/api/users'
    }
  ];
  
const redisOptions: cache.RedisOptions = {
    port: 6379,
    host: 'localhost'
};

const options: cache.CacheOptions = {
    prefix: (ctx: Koa.Context) => 'koa-redis-cache:',
    expire: 30 * 30,
    passParam: 'skip',
    routes: routeOptions,
    onerror: (error: Error) => console.log(error),
    redis: redisOptions
};

app.use(cache(options));

const CONFIG = {
    store: new RedisStore({
        host: '127.0.0.1',
        port: 6379,
        max_attempts: 0
    })
}
app.use(session(CONFIG, app));

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');