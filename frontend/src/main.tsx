import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/Router.tsx";
import DoctorProvider from "./contexts/DoctorContext.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <DoctorProvider>
    <Router />
  </DoctorProvider>
);
