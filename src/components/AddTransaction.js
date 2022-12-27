import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";

const AddTransaction = () => {
  let id = localStorage.getItem("id");
  const navigate = useNavigate();
  let [addTransaction, setAddTransaction] = useState({
    userID: id,
    amount: "",
    date: "",
    description: "",
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
        navigate("/showtransaction");
      })
      .catch((err) => {
        console.log(err);
      });
    setAddTransaction({
      amount: "",
      date: "",
      description: "",
      type: "",
    });
  };
  return (
    <React.Fragment>
      <div>
        <Navbar />
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
                            required
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
                            required
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => data(e)}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Enter Date
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <textarea
                            required
                            type="textbox"
                            name="description"
                            value={description}
                            onChange={(e) => data(e)}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Enter Description
                          </label>
                        </div>
                        {/* description input */}
                        <div className="d-none" value={userID}></div>
                        <div className="form-outline mb-4">
                          <select
                            required
                            className="form-select"
                            aria-label="Default select example"
                            value={type}
                            onChange={(e) => data(e)}
                            name="type"
                          >
                            <option></option>
                            <option type="number" value="1">
                              Debit
                            </option>
                            <option type="number" value="2">
                              Credit
                            </option>
                          </select>
                          <label className="form-label" htmlFor="form3Example4">
                            Select Type
                          </label>
                        </div>
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Add Transaction
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
    </React.Fragment>
  );
};

export default AddTransaction;
