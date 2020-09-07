import React from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import './Form.css'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { toggleAuth } = this.context;

    if (username === "admin" && password === "root") {
      toggleAuth();
    }
  };
  render() {
    const { username, password } = this.state;
    const { isAuth, toggleAuth } = this.context;
    if (!isAuth) {
      return (
        <form 
        style={{border:"2px solid black",
        padding:"20px",
        width:"30%",
        fontSize:"x-large",
        margin:"40px"
      }}
        onSubmit={this.handleSubmit}>
          <div>
            NAME:{" "}
            <input
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            PASSWORD:{" "}
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <button onClick={toggleAuth}> LOGOUT </button>
        </div>
      );
    }
  }
}

Form.contextType = AuthContext;
