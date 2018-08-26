import * as Router from 'koa-router';
import { addTwoNumbers } from '../controllers/math';

const router = new Router();

router.get('/', (ctx: Router.IRouterContext) => {
    ctx.body = addTwoNumbers(10, 20);
});

module.exports = router.routes();
