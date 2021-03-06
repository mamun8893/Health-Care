import React, { useState } from "react";
import "./login.css";
import googleImg from "../../images/google.png";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router";

const Login = () => {
  const { handleSignin, handleSignup, handleGoogleSignin } = useAuth();
  const [key, setKey] = useState("login");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();

  const navigate = () => {
    history.push("/home");
  };

  const onSubmit = (data) => {
    handleSignin(data.email, data.password, navigate);
  };

  const onSubmitSignup = (data) => {
    handleSignup(data.email, data.password, data.name, navigate);
  };

  const handleGsignin = () => {
    handleGoogleSignin(navigate);
  };

  return (
    <div className="login-signup">
      <Container>
        <Row className="justify-content-center">
          <Col xl={5} lg={6} md={8}>
            <div className="login-signup-card">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                {/* Login Toggle */}

                <Tab eventKey="login" title="Login">
                  <div className="login-form">
                    <form key={1} onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                      />
                      <input
                        type="password"
                        {...register("password", { required: true })}
                      />
                      <input
                        type="submit"
                        value="Log in"
                        className="login-signup-btn"
                      />
                      <div className="or-login-txt">
                        <p>OR</p>
                      </div>
                      <div
                        className="google-signup-btn"
                        onClick={handleGsignin}
                      >
                        <img src={googleImg} alt="" />
                        <span>Sign in With Google </span>
                      </div>
                    </form>
                  </div>
                </Tab>

                {/* SignUp Toggle */}

                <Tab eventKey="register" title="Resister">
                  <div className="signup-form">
                    <form key={2} onSubmit={handleSubmit2(onSubmitSignup)}>
                      <input
                        type="text"
                        {...register2("name")}
                        placeholder="Enter Your Name"
                      />
                      <input
                        type="email"
                        {...register2("email", { required: true })}
                        placeholder="Enter Your Email"
                      />
                      {errors.email && (
                        <span className="pb-2 d-block text-danger">
                          This field is required
                        </span>
                      )}
                      <input
                        type="password"
                        {...register2("password", { required: true })}
                        placeholder="Enter Your Password"
                      />
                      {errors.password && (
                        <span className="pb-2 d-block text-danger">
                          This field is required
                        </span>
                      )}

                      {errors.conformPassword && (
                        <span className="pb-2 d-block text-danger">
                          This field is required
                        </span>
                      )}
                      <input
                        type="submit"
                        className="login-signup-btn"
                        value="Sign up"
                      />
                      <div className="or-login-txt">
                        <p>OR</p>
                      </div>
                      <div
                        className="google-signup-btn"
                        onClick={handleGoogleSignin}
                      >
                        <img src={googleImg} alt="" />
                        <span>Sign in With Google </span>
                      </div>
                    </form>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
