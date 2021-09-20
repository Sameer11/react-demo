import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const apiurl = "http://localhost:3100/public/login";

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const newEntry = {email, password};
    // setAllEntry([...allEntry, newEntry])
    let data = await axios.post(apiurl, newEntry)
    localStorage.setItem('user', JSON.stringify(data.data));
    if (data.data.role === 'ADMIN') {
      props.history.push("/")
    } else {
      props.history.push("/profile")
    }
  }

  return (
    <div className="Login" align="center">
      <Form onSubmit={handleSubmit}>
      <h3>Login</h3>
        <Form.Group className="form-group" size="lg" controlId="email">
          <Form.Control
            autoFocus
            placeholder="Enter your email id"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="form-group" size="lg" controlId="password">
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {error && <div className="error">{error}</div>}
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}