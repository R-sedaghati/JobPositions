import { Component } from "react";
import * as yup from "yup";
import JobPosation from "./jobPosation";

class NewLogin extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: [],
    sending: false,
  };

  schema = yup.object().shape({
    username: yup
      .string("کد ملی خود را وارد کنید")
      .min(10, "کدملی باید 10 رقم باشد")
      .required("این فیلد الزامی میباشد"),
    password: yup.string().min(8, "پسورد باید حداقل 10 رقم باشد").required(""),
  });

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    if (result) {
      this.setState({ sending: true });
      fetch("https://api.moallem.sch.ir/hire/v1/auth/jwt/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.account),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // success
          this.setState({ sending: false });
          localStorage.setItem("token", JSON.stringify(data.access));
          localStorage.setItem("tokenRefresh", JSON.stringify(data.refresh));
          window.location = "/jobposation";
        })
        .catch((error) => {
          console.error("Error:", error);
          // error
          this.setState({ sending: false });
          this.setState({ errors: "ایمیل یا پسورد نادرست است." });
        });
    }
  };

  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { username, password } = this.state.account;
    const { props } = this.props;
    return !props ? (
      <>
        <div dir="ltr" class="container">
          <div class="row justify-content-center align-items-center inner-row">
            <div class="col-lg-5 col-md-7">
              {/* Create-Login-Form */}
              <div class="form-box login-form p-md-5 p-3">
                <div class="form-title">
                  <h2 class="fw-bold mb-3 text-center">Login</h2>
                </div>
                {this.state.errorMessage && (
                  <div className="alert alert-danger">
                    {this.state.errorMessage}
                  </div>
                )}
                {this.state.errors.length !== 0 && (
                  <div className="alert alert-danger ">
                    <ul>
                      {this.state.errors.map((e, i) => (
                        <li key={i}>{e}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <form onSubmit={this.handleSubmit}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Email"
                      id="floatingInput"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      placeholder="Password"
                      id="floatingPassword"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="mt-3">
                    <button
                      disabled={this.state.sending}
                      type="submit"
                      class="btn btn-success"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div class="mt-3">
                  <span>Don't have account?</span>
                  <button class="p-0 border-0 text-primary bg-white signup-show">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <JobPosation />
      </>
    );
  }
}

export default NewLogin;
