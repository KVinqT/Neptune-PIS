import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const userLogin = async () => {
    const receptionName = "reception1";
    const receptionPassword = "receptioncounter1";
    const patientName = "patient1";
    const patientPassword = "patient1";
    console.log(user);
    if (user.userName === patientName && user.password === patientPassword) {
      setError(false);
    } else if (
      user.userName === receptionName &&
      user.password === receptionPassword
    ) {
      setError(false);
    } else if (
      user.userName !== patientName &&
      user.password !== patientPassword
    ) {
      setError(true);
    } else if (
      user.userName !== receptionName &&
      user.password !== receptionPassword
    ) {
      setError(true);
    }

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    const accessToken = data.accessToken;
    localStorage.setItem("accessToken", accessToken);

    navigate("/");
  };

  return (
    <div className="w-full h-full">
      <div className="md:max-w-[800px] md:h-[80vh] rounded-xl absolute left-0 right-0 top-0 bottom-0 m-auto shadow-2xl border-t md:flex md:justify-around items-center">
        <div className="h-full w-[300px]">
          <div className="mt-12">
            <img
              className="md:w-[100px] m-auto"
              src="https://cdn.discordapp.com/attachments/1158254691919077387/1164980252225847306/IMG_8986.jpg?ex=65452f68&is=6532ba68&hm=f0f319ed9aa8b1b0bb3fe27c4602206e46beb8b02baeec4b34276ecf2dfd7ef1&"
              alt=""
            />
            <div className="md:mt-8">
              <div>
                <p className="font-semibold mb-2">Username</p>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Input
                    type="username"
                    id="username"
                    placeholder="Enter Username"
                    className="focus:outline-none border-[#5068E9]"
                    onChange={(evt) =>
                      setUser({ ...user, userName: evt.target.value })
                    }
                  />
                </div>{" "}
                <p> {error === true ? "Username may not be correct" : ""}</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold mb-2">Password</p>
                <div className="grid w-full max-w-sm items-center gap-1.5 focus:outline-none">
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="focus:outline-none border-[#5068E9]"
                    onChange={(evt) =>
                      setUser({ ...user, password: evt.target.value })
                    }
                  />
                </div>{" "}
                <p> {error === true ? "Password may not be correct" : ""}</p>
              </div>
              <Button
                onClick={userLogin}
                className="md:mt-8 bg-[#5068E9] py-2.5 px-12 rounded-lg text-white font-semibold"
              >
                Sign In
              </Button>{" "}
              <p>
                {" "}
                {error === true
                  ? "Username or password is wrong. Check again"
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="md:w-[200px]"
            src="https://cdn.discordapp.com/attachments/1158254691919077387/1164980252473307217/IMG_8985.jpg?ex=65452f68&is=6532ba68&hm=993fd57b7d135af309e3053ebeda10f51b61aa89747c9220b4de65b7dbc8a6ff&"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
