import axios from "axios";
import React, { useState } from "react";

const SignUpForm = () => {
  let [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const { name, email, password, phone } = inputdata;
  const data = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    await axios
      .post("https://pkdservers.com/ExpenseTracker/Users/SignUp", inputdata)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                    <form onSubmit={(e) => handleSignUp(e)}>
                      {/* email input */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Full name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
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
                      {/* password input */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          phone Number
                        </label>
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>
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

export default SignUpForm;
