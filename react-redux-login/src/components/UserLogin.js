import React, { Component } from "react";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";
import { connect } from 'react-redux';
import * as actions from '../action/userAction';
const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input placeholder={`Enter ${meta.label}`} {...handler()} />
    <span>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);

class UserLogin extends Component {
  
  loginForm = FormBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  handleReset = () => {
    this.loginForm.reset();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.loginForm.value;
    console.log("Form values", data);
    this.props.loginUsers(data);
    localStorage.setItem('Login User', JSON.stringify(data));
  };

  render() {
      return (
        <>
          <div className="container py-3">
            <div className="row">
              <div className="mx-auto col-sm-6">
                <div className="card shadow">
                  <FieldGroup
                    control={this.loginForm}
                    render={({ get, invalid }) => (
                      <form onSubmit={this.handleSubmit}>
                        <div className="card-header">
                          <h4 className="mb-0">Login Information</h4>
                        </div>
                        <div className="card-body">
                          <div className="form" role="form">
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label form-control-label">
                                Email
                              </label>
                              <div className="col-lg-9">
                                <FieldControl
                                  name="email"
                                  render={TextInput}
                                  meta={{ label: "Email" }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label form-control-label">
                                Password
                              </label>
                              <div className="col-lg-9">
                                <FieldControl
                                  name="password"
                                  render={TextInput}
                                  meta={{ label: "Password" }}
                                />
                              </div>
                            </div>
                            
                            <div className="form-btn">
                            <button
                              className="btn btn-danger"
                              type="button"
                              onClick={this.handleReset}
                            >
                              Reset
                            </button>
                              <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={invalid}
                              >
                                Login User
                              </button>
                              <br />
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
export default connect('',actions) (UserLogin);
