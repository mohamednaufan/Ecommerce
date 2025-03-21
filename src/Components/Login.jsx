import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardBody, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaUserAlt, FaLock } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = 'https://67d2872190e0670699bdf31c.mockapi.io/Admin/User/login'; 

    axios
      .post(apiUrl, {
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log('Login successful:', response.data);
        alert('Login successful!');
      })
      .catch((error) => {
        console.error('There was an error logging in!', error);
        alert('Login failed. Please check your credentials and try again.');
      });
  };

  return (
    <Container fluid>
      <Card className="text-black m-5" style={{ borderRadius: '25px', boxShadow: '3px 6px 5px 8px rgba(0, 0, 0, 0.1)' } } >
        <CardBody>
          <Row>
            <Col md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
              <h1 className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</h1>

              <InputGroup className="mb-4">
                <InputGroup.Text>
                  <FaUserAlt size={20} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup className="mb-4">
                <InputGroup.Text>
                  <FaLock size={20} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputGroup>

              <Button className="mb-4" size="lg" onClick={handleSubmit}>
                Log in
              </Button>
            </Col>

            <Col md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                alt="Login illustration"
                className="img-fluid"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Login;
