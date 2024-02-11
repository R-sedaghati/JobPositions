import NewLogin from "./component/newLogin";
import JobPosation from "./component/jobPosation";
import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import * as $ from "jquery";

class App extends Component {
  state = {
    Token: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    const tokenRefresh = localStorage.getItem("tokenRefresh");

    if (!token || !tokenRefresh) {
      this.setState({ Token: null });
      return;
    }

    const self = this;

    $.ajax({
      url: "https://api.moallem.sch.ir/hire/v1/auth/jwt/refresh/",
      type: "POST",
      data: { tokenRefresh },
      success: function (response) {
        token = response.data.access;
        localStorage.setItem("token", JSON.stringify(token));
        if (!token) {
          self.setState({ Token: null });
        } else {
          self.setState({ Token: token });
        }
      },
      error: function (error) {
        if (error.status === 401) {
        } else {
        }
      },
    });
  }

  render() {
    return (
      <>
        <Routes>
          <Route Token={this.state.Token} path="/" Component={NewLogin} />
          <Route path="/jobposation" Component={JobPosation} />
        </Routes>
      </>
    );
  }
}

export default App;
