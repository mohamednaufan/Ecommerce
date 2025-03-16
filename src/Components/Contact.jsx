import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaUserAlt, FaEnvelope, FaComments } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

    // Here, you can send form data to an API or server
    console.log('Form Submitted:', formData);
    alert('Thank you for your message!');
  };

  return (
    <Container fluid>
      <Card className="text-black m-5" style={{ borderRadius: '25px', boxShadow: '3px 6px 5px 8px rgba(0, 0, 0, 0.1)' }}>

        <Card.Body>
          <Row>
            <Col md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
              <h1 className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact Us</h1>

              {/* Name Input */}
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

              {/* Email Input */}
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

              {/* Message Input */}
              <InputGroup className="mb-4">
                <InputGroup.Text>
                  <FaComments size={20} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Your Message"
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </InputGroup>

              {/* Submit Button */}
              <Button className="mb-4" size="lg" onClick={handleSubmit}>
                Send Message
              </Button>
            </Col>

            {/* Image Column */}
            <Col md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" // New image URL
                alt="Contact Us Illustration"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
