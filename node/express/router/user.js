let express = require("express");
let router = express.Router();
router.get("/user/list", (req, res) => {
  res.send({ name: "李军", age: "25" });
});

module.exports = router;
