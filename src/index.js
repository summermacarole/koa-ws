const Koa = require("koa");
const websockify = require("koa-websocket");
const router = require("./router/index");
const wsRouter = require("./router/websocket");

const app = websockify(new Koa());

app.ws.use((ctx, next) => {
  return next(ctx);
});

//这个是websocket路由
app.ws.use(wsRouter.routes()).use(wsRouter.allowedMethods());
//这个可以保证正常路由有效
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("koa is listening in 3000");
});
