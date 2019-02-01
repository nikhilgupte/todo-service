import * as Router from 'koa-router';

import * as Todo from '../db/queries/todos';

export const router = new Router();
const BASE_URL = `/api/todo`;

router.get(BASE_URL, async (ctx) => {
    try {
      const todos = await Todo.findAll(ctx.query.completed);
      ctx.body = {
        status: 'success',
        data: todos
      };
    } catch (err) {
      console.log(err)
    }
});

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const todo = await Todo.find(ctx.params.id);
    if (todo.length) {
      ctx.body = {
        status: 'success',
        data: todo
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'Sorry, That todo does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const todo = await Todo.create(ctx.request.body);
    if (todo.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: todo
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    console.log(err)
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const todo = await Todo.update(ctx.params.id, ctx.request.body);
    if (todo.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: todo
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'Sorry, That todo does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})


router.delete(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const todo = await Todo.del(ctx.params.id);
    if (todo.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: todo
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'Sorry, That todo does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})
