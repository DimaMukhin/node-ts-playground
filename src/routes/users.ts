import * as Router from 'koa-router';

const router = new Router();

router.get('/', (ctx: Router.IRouterContext) => {
    ctx.body = 'ok';
});

module.exports = router.routes();
