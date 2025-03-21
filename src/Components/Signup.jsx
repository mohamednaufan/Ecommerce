import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardBody, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaUserAlt, FaEnvelope, FaLock, FaKey } from 'react-icons/fa';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const apiUrl = 'https://67d2872190e0670699bdf31c.mockapi.io/Admin/User'; 

    // Axios POST request
    axios
      .post(apiUrl, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        newsletter: formData.newsletter,
      })
      .then((response) => {
        console.log('User registered successfully:', response.data);
        alert('Registration successful!');
      })
      .catch((error) => {
        console.error('There was an error registering the user!', error);
        alert('Registration failed. Please try again.');
      });
  };

  return (
    <Container fluid>
      <Card className="text-black m-5" style={{ borderRadius: '25px', boxShadow: '3px 6px 5px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardBody>
          <Row>
            <Col md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
              <h1 className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h1>

              <InputGroup className="mb-4">
                <InputGroup.Text>
                  <FaUserAlt size={20} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup className="mb-4">
                <InputGroup.Text>
                  <FaEnvelope size={20} />
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

              <InputGroup className="mb-4">
                <InputGroup.Text>
                  <FaKey size={20} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Repeat your password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </InputGroup>

              <Form.Group className="mb-4">
                <Form.Check
                  type="checkbox"
                  label="Subscribe to our newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button className="mb-4" size="lg" onClick={handleSubmit}>
                Register
              </Button>
            </Col>

            <Col md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                alt="Sign up illustration"
                className="img-fluid"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Signup;
