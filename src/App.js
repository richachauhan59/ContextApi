
import React from "react";
import { AuthContext } from "./Context/AuthContextProvider";
import Form from "./Component/Form";

export default function App() {
  return (
    <div className="App">
      <h1>Authentication Using Context API</h1>
      <Form/>
      <AuthContext.Consumer>
        {({ isAuth }) => (
          <div 
          style={{border:"2px solid black",
          padding:"20px",
          width:"10%",
          fontSize:"larger",
          marginLeft:"12%"
        }}
          > {isAuth ? "Authenticated" : "Not Authenticated"} </div>
        )}
      </AuthContext.Consumer>
    </div>
  );
}