import { useState } from "react";
import { useHistory } from "react-router-dom";


export default function Signup() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const postUserData = () => {

    const postData = {
      username: username,
      password: password
    }

    fetch("https://rentalappbackend.herokuapp.com/usersdata/signup", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        console.log(postData);
        history.push("/usersdata/login")
      })
  }

  return (
    <div className="settings-container">
      <h3 className="settings-header">Sign Up for Free</h3>
      <div className="form-container">

        <div className="form-group">
          <label htmlFor="username">Email Address : </label>
          <input name="username" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="username"></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password : </label>
          <input name="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password"></input>
        </div>
        <button className="signup" onClick={() => postUserData()}>Signup</button>
      </div>
    </div>
  );
}