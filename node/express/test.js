const express = require("express");
// 创建web服务器
const app = express();

app.get("/user", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send({ name: "李军", age: "25" });
  console.log(req.query);
});
app.get("/user/:id", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});
app.post("/user", (req, res) => {
  console.log(req.query);

  res.send({ name: "李军", age: "25" });
});
// 设置静态资源
app.use("/public", express.static("../../public"));
app.use("/data", express.static("../data"));
app.listen(8080, () => {
  console.log("run 8080");
});
