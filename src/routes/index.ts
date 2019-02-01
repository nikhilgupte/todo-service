import * as Router from 'koa-router';

export const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, hello, I don\'t know why you day goodbye, I say hello...'
  };
})
