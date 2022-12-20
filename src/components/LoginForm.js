import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  let [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;
  const data = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios
      .post("https://pkdservers.com/ExpenseTracker/Users/Login", login)
      .then((response) => {
        // let myobj = JSON.stringify(response.data.data);
        // console.log(response.data);
        // localStorage.setItem("token", myobj);
        localStorage.setItem("token1", response.data.data.ID);
        localStorage.setItem("token2", response.data.data.name);
        localStorage.setItem("token3", response.data.data.email);
        localStorage.setItem("token4", response.data.data.password);
        localStorage.setItem("token5", response.data.data.phone);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    setLogin({
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    if (
      localStorage.getItem("token1") &&
      localStorage.getItem("token2") &&
      localStorage.getItem("token3") &&
      localStorage.getItem("token4") &&
      localStorage.getItem("token5")
    ) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <section className="">
        {/* Jumbotron */}
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleLogin}>
                      <div className="form-outline mb-4">
                        <input
                          required
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          required
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          password
                        </label>
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Login
                      </button>
                      <br />
                      <Link type="text" to="/signup">
                        Register account?
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
    </div>
  );
};

export default LoginForm;
