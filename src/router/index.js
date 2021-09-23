const Router = require("koa-router");

const router = new Router();

router.get("/index", async (ctx) => {
  ctx.body = "欢迎";
});

module.exports = router;
