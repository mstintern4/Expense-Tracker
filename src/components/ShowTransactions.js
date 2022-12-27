import React, { useState, useEffect } from "react";
import moment from "moment";

import axios from "axios";
import Navbar from "./Navbar";

const ShowTransactions = () => {
  let id = localStorage.getItem("id");

  const [users, setUsers] = useState([]);
  const [add, setAdd] = useState([]);
  const [sub, setSub] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      `https://pkdservers.com/ExpenseTracker/Transactions/GetAllTransactionsByUserID/${id}`
    );
    setUsers(result.data);
    for (const some of result.data) {
      add.push(some.type === 1 ? some.amount : null);
    }
    for (const some of result.data) {
      sub.push(some.type === 2 ? some.amount : null);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const Debit = add.reduce((prev, cur) => prev + cur, 0);
  const Credit = sub.reduce((prev, cur) => prev + cur, 0);
  const total = Debit - Credit;
  return (
    <React.Fragment>
      <Navbar />
      <div className="container my-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Debit</th>
              <th scope="col">Credit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{moment(user.date).format("MMM Do YYYY")}</td>
                    <td>{user.description}</td>
                    <td>{user.type === 1 ? <td>{user.amount}</td> : null}</td>
                    <td>{user.type === 2 ? <td>{user.amount}</td> : null}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <p>Debit: {Debit}</p>
        <p>Credit: {Credit}</p>
        <p>
          Total is {total > 0 ? "Debit" : "Credit"} {total}
        </p>
      </div>
    </React.Fragment>
  );
};

export default ShowTransactions;
