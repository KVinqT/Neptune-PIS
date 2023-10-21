import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import Home from "@/App";
import Login from "@/component/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" Component={Home} />
        </Route>
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
