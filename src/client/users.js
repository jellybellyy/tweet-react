import React, { Component } from "react";

class User extends Component {
  render() {
    let { user } = this.props;

    return (
      <div>
        <span>{user.name}</span>
        <span>@{user.screen_name}</span>
      </div>
    );
  }
}

export default User;
