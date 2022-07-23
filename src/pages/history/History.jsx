import React, { useEffect } from "react";
import { Button } from "antd";
import { getData } from "../../core/request/api";
const History = function () {
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="history">
      history
      <Button>11111</Button>
    </div>
  );
};
export default History;
