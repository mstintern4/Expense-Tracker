import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddTransaction = () => {
  let [addTransaction, setAddTransaction] = useState({
    amount: "",
    date: "",
    description: "",
    userID: "",
    type: "",
  });
  const { amount, date, description, userID, type } = addTransaction;
  const data = (e) => {
    setAddTransaction({ ...addTransaction, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://pkdservers.com/ExpenseTracker/Transactions/AddTransaction",
        addTransaction
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setAddTransaction({
      amount: "",
      date: "",
      description: "",
      userID: "",
      type: "",
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
                      {/* date input */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="amount"
                          value={amount}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Enter Amount
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="date"
                          name="date"
                          value={date}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          date address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <textarea
                          type="textbox"
                          name="description"
                          value={description}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          description
                        </label>
                      </div>
                      {/* description input */}
                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          name="userID"
                          value={userID}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          userID Number
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option></option>
                          <option
                            value={type}
                            onChange={(e) => data(e)}
                            name="type"
                            type="number"
                          >
                            1
                          </option>
                          <option
                            type="number"
                            name="type"
                            onChange={(e) => data(e)}
                            value={type}
                          >
                            2
                          </option>
                        </select>
                        <label className="form-label" htmlFor="form3Example4">
                          Select type
                        </label>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>
                      <Link
                        to="/"
                        className="btn btn-danger btn-block mb-4 mx-3"
                      >
                        Back
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

export default AddTransaction;
