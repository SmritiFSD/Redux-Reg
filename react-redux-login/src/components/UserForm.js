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

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }
  loginForm = FormBuilder.group({
    fname: ["", Validators.required],
    lname: ["", Validators.required],
    mobile: ["", Validators.required],
    address: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  handleReset = () => {
    this.loginForm.reset();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values", this.loginForm.value);
    this.props.fetchUsers(this.loginForm.value);
    localStorage.setItem('document', JSON.stringify(this.loginForm.value));
  };

  render() {
    return (
      <div>
        <div className="container py-3">
          <div className="row">
            <div className="mx-auto col-sm-6">
              <div className="card">
                <FieldGroup
                  control={this.loginForm}
                  render={({ get, invalid }) => (
                    <form onSubmit={this.handleSubmit}>
                      <div className="card-header">
                        <h4 className="mb-0">User Information</h4>
                      </div>
                      <div className="card-body">
                        <div className="form" role="form">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label form-control-label">
                              First name
                            </label>
                            <div className="col-lg-8">
                              <FieldControl
                                name="fname"
                                render={TextInput}
                                meta={{ label: "First name" }}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label form-control-label">
                              Last name
                            </label>
                            <div className="col-lg-8">
                              <FieldControl
                                name="lname"
                                render={TextInput}
                                meta={{ label: "Last name" }}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label form-control-label">
                              Mobile
                            </label>
                            <div className="col-lg-8">
                              <FieldControl
                                name="mobile"
                                render={TextInput}
                                meta={{ label: "Mobile" }}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label form-control-label">
                              Address
                            </label>
                            <div className="col-lg-8">
                              <FieldControl
                                name="address"
                                render={TextInput}
                                meta={{ label: "Address" }}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label form-control-label">
                              Email
                            </label>
                            <div className="col-lg-8">
                              <FieldControl
                                name="email"
                                render={TextInput}
                                meta={{ label: "Email" }}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label form-control-label">
                              Password
                            </label>
                            <div className="col-lg-8">
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
                              Submit
                            </button>
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
      </div>
    );
  }
}
export default connect('',actions) (UserForm);