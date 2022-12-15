import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowTransactions = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://pkdservers.com/ExpenseTracker/Transactions/GetAllTransactionsByUserID/1"
    );
    setUsers(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="container my-5">
      <h1>{users.id}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">User Id</th>
            <th scope="col">type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.ID}</td>
                <td>{user.amount}</td>
                <td>{user.date}</td>
                <td>{user.description}</td>
                <td>{user.userID}</td>
                <td>{user.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/" className="btn btn-danger btn-block mb-4 mx-3">
        Back
      </Link>
    </div>
  );
};

export default ShowTransactions;
