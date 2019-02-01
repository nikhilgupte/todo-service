import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyParser';

import { router as todoRoutes } from './routes/todos';
import { router as indexRoutes } from './routes/index';

const app = new Koa();
const PORT = process.env.PORT || 8080;

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(todoRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
