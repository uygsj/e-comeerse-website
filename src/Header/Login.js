import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../Store/AuthContext";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  const history = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };const submitHandler = (e) => {
    e.preventDefault();
  
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    setIsLoading(true);
    let url;
  
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZnsryIn3EL7dA9W-HgnP0X6EXabzgASU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZnsryIn3EL7dA9W-HgnP0X6EXabzgASU";
    }
  
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
  
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // Store the bearer token in context
        authCtx.login(data.idToken);
        // Store the bearer token in local storage
        localStorage.setItem("token", data.idToken);
        // Redirect the user to the products page
        history("/store");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <div className="px-4 py-3 bg-white shadow-lg">
        <h3 className="text-center font-weight-bold">
          {isLogin ? "Login" : "Sign Up"}
        </h3>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mt-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              ref={emailRef}
              className="rounded"
            />
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="on"
              placeholder="******"
              ref={passwordRef}
              className="rounded"
            />
          </Form.Group>
          <div className="d-flex justify-content-between mt-4">
            <Button variant="primary" type="submit">
              {isLogin ? "Login" : "Create Account"}
            </Button>
            {isLoading && <p>Sending request...</p>}
            <Button
              type="button"
              onClick={switchAuthModeHandler}
              variant="secondary"
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;