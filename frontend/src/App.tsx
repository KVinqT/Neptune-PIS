import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-full">
      <p>HEllo home page</p>
      <Link to="/departments" className="text-blue-700 underline">
        Click me for departments
      </Link>
    </div>
  );
}
