import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" />
        <Route element={<PrivateRoutes />}>
          {/* <Route path="/book:id" /> */}
          {/* <Route path="/user:id" /> */}
          {/* <Route path="/setting:id" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
