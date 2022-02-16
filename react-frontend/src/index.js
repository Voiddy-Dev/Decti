import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);