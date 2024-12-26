import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/userSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const [formInput, setformInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    // console.log(name, value);
    setformInput((curInput) => {
      return {
        ...curInput,
        [name]: value,
      };
    });
  };

  const addUser = (event) => {
    event.preventDefault();
    alert("User is added ");
    dispatch(setUsers(formInput));
  };

  return (
    <>
      <br />
      <div className="home">
        <div className="home-content">
          <h3>Enter the Details</h3>
          <form>
            <label>Name</label>
            <br />
            <input
              name="name"
              type="text"
              value={formInput.name}
              onChange={handleChange}
              placeholder="Enter the Name"
            />
            <br />
            <label>Age</label>
            <br />
            <input
              name="age"
              type="number"
              value={formInput.age}
              onChange={handleChange}
              placeholder="Enter the Age"
            />
            <br />
            <label>Email</label>
            <br />
            <input
              name="email"
              type="text"
              value={formInput.email}
              onChange={handleChange}
              placeholder="Enter the Email"
            />
            <br />
            <label>Mobile No</label>
            <br />
            <input
              name="contact"
              type="text"
              value={formInput.contact}
              onChange={handleChange}
              placeholder="Enter the Contact"
            />
            <br />
            <br />
            <button onClick={addUser}>Add</button>
          </form>
          <footer>
            <h3>This Form is Working based on the React Redux</h3>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
