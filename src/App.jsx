import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "../src/pages/Home";
import Layout from "./assets/component/Layout";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ex" element={<Expenses />} />
        <Route path="/in" element={<Income />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
