import React, { useState, useEffect } from "react";
import moment from "moment";

import axios from "axios";
import Navbar from "./Navbar";

const ShowTransactions = () => {
  let user = JSON.parse(localStorage.getItem("token1"));

  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      `https://pkdservers.com/ExpenseTracker/Transactions/GetAllTransactionsByUserID/${user}`
    );
    setUsers(result.data);
    // console.log(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">User Id</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">type</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.userID}</td>
                  <td>{moment(user.date).format("MMM Do YYYY")}</td>
                  <td>{user.description}</td>
                  <td>{user.amount}</td>
                  <td>{user.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowTransactions;
