import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slices/userSlice";

const Users = () => {
  const users = useSelector((state) => state.usersInfo.users);
  console.log(users);

  const dispatch = useDispatch();

  const deleteUserInfo = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div className="table">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.contact}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUserInfo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
