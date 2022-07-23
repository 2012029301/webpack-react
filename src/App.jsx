import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/components/header/Header";

const Home = lazy(() =>
  import(/* webpackChunkName: 'home' */ "./pages/home/Home")
);
const History = lazy(() =>
  import(/* webpackChunkName: 'about' */ "./pages/history/History")
);
const App = function (params) {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="history" element={<History />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
