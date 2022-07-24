import React, { useEffect } from "react";
import { Button } from "antd";
import { getData } from "../../core/request/api";
import { store } from "../../redux/store";

const History = function () {
  useEffect(() => {
    getData();
    store.dispatch({ type: "counter/incremented" });
  }, []);
  console.log(store.getState());
  return (
    <div className="history">
      history
      <Button>11111</Button>
    </div>
  );
};
export default History;
