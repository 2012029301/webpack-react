const express = require("express");
// 创建web服务器
const app = express();

// 定义中间件

const mv = function (req, res, next) {
  console.log("我是中间件");

  next();
};
// 全局生效的中间件
app.use(mv);
// 导入路由模块
const router = require("./user");
app.use("/api", router);

app.listen(7070, () => {
  console.log("run 7070");
});
