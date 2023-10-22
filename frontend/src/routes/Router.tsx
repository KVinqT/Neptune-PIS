import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import Home from "@/App";
import Login from "@/component/Login";
import Department from "@/component/Department";
import DepartmentDetail from "@/component/DepartmentDetail";
import BookingStage from "@/component/BookingStage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" Component={Home} />
          <Route path="/departments" Component={Department} />
          <Route path="/departments/:id" Component={DepartmentDetail} />
          <Route path="/booking" Component={BookingStage} />
        </Route>
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
