import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" />
        <Route element={<PrivateRoutes />}>
          <Route path="/book:id" />
          {/* <Route path="/user:id" /> */}
          {/* <Route path="/setting:id" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
