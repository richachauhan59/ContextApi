import React from "react";

export const AuthContext = React.createContext();

export default class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }
  toggleAuth = () => {
    this.setState({
      isAuth: !this.state.isAuth
    });
  };
  render() {
    const { isAuth } = this.state;
    const { toggleAuth } = this;
    const value = { isAuth, toggleAuth };
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
