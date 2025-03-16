import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import banner from "../assets/banner2.jpg";
import banner1 from "../assets/bannersale.jpg";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.jpg";
import logo6 from "../assets/logo6.png";
import banner2 from "../assets/bannerfree.jpg";
import Contact from './Contact';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  let Giturl = "https://raw.githubusercontent.com/mohamednaufan/Ecommerce/refs/heads/main/src/assets/";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://67d2872190e0670699bdf31c.mockapi.io/Admin/Admin');
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/products/${categoryId}`);
  };

  return (
    <>
      {/* Carousel Component */}
      <Carousel interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Delicious chocolate"
            style={{ objectFit: 'cover', height: '570px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Crispy Biscuit"
            style={{ objectFit: 'cover', height: '570px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Crispy Biscuit"
            style={{ objectFit: 'cover', height: '570px' }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Product Categories Section */}
      <div className="container my-5">
      <h2
  className="text-center mb-4"
  style={{
    fontSize: '2.8rem', // Slightly larger for added impact
    fontWeight: '600', // Medium bold for a refined look
    color: '#2c3e50', // A deep, rich color for a professional appearance
    textTransform: 'capitalize', // Capitalize the first letter of each word
    letterSpacing: '1px', // Subtle spacing for readability and elegance
    display: 'inline-block', // Inline-block to enable the border animation
    position: 'relative', // To position the underline effect
    paddingBottom: '10px', // Space between text and the underline
    marginTop: '40px', // Balanced spacing from top
    fontFamily: '"Georgia", "Times New Roman", serif', // Elegant serif font
    transition: 'all 0.3s ease', // Smooth transition for hover effects
  }}
  onMouseEnter={(e) => {
    e.target.style.color = '#e74c3c'; // Change text color on hover (red tone)
    e.target.style.borderBottom = '3px solid #e74c3c'; // Add a red underline on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.color = '#2c3e50';
    e.target.style.borderBottom = '3px solid transparent'; 
  }}
>
  Product Categories
  <span
    style={{
      position: 'absolute', 
      bottom: 0,
      left: 0,
      width: '100%',
      height: '3px',
      backgroundColor: '#e74c3c',
      transform: 'scaleX(0)', 
      transformOrigin: 'bottom right', 
      transition: 'transform 0.3s ease', 
    }}
  />
</h2>


        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center">{error}</div>
        ) : (
          <Row className="g-4">
            {categories.slice(0, 8).map((category) => (
              <Col key={category.id} sm={12} md={6} lg={3}>
                 <Card style={{ width: '100%', height: 'auto', marginTop: '30px' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.54)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                  <Card.Img
                    variant="top"
                    src={`${Giturl}${category.image}`}
                    className="card-img-top"
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text>{category.description}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleCategoryClick(category.id)}
                      className="w-100"
                    >
                      View Products
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>

      <div>
        
      </div>
      {/* Company Partners Section */}
     <div className='bg-light p-2'>
     <div className="container my-5">
     <h2
  className="text-center mb-4"
  style={{
    fontSize: '2rem', // Slightly larger for added impact
    fontWeight: '600', // Medium bold for a refined look
    color: 'black', // A deep, rich color for a professional appearance
    textTransform: 'capitalize', // Capitalize the first letter of each word
    letterSpacing: '1px', // Subtle spacing for readability and elegance
    display: 'inline-block', // Inline-block to enable the border animation
    position: 'relative', // To position the underline effect
    paddingBottom: '10px', // Space between text and the underline
    // marginTop: '40px', // Balanced spacing from top
    fontFamily: '"Georgia", "Times New Roman", serif', // Elegant serif font
    transition: 'all 0.3s ease', // Smooth transition for hover effects
  }}
  onMouseEnter={(e) => {
    e.target.style.color = 'black'; // Change text color on hover (red tone)
    e.target.style.borderBottom = '3px solid black'; // Add a red underline on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.color = '#2c3e50'; // Revert to default text color
    e.target.style.borderBottom = '3px solid transparent'; // Remove the underline on hover out
  }}
>
Our Company Partners
  <span
    style={{
      position: 'absolute', // Positioning for the underline effect
      bottom: 0,
      left: 0,
      width: '100%',
      height: '3px',
      backgroundColor: 'white', // Red underline color
      transform: 'scaleX(0)', // Start hidden
      transformOrigin: 'bottom right', // Animate from right to left
      transition: 'transform 0.3s ease', // Smooth animation
    }}
  />
</h2>

        <Row className="g-4">
          <Col sm={12} md={6} lg={2}>
            <Card className="partner-card shadow-sm"
             style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.54)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <Card.Img variant="top" src={logo1} style={{ objectFit: 'contain', height: '150px', padding: '10px' }} />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <Card className="partner-card shadow-sm"
             style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <Card.Img variant="top" src={logo2} style={{ objectFit: 'contain', height: '150px', padding: '10px' }} />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <Card className="partner-card shadow-sm"
             style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <Card.Img variant="top" src={logo3} style={{ objectFit: 'contain', height: '150px', padding: '10px' }} />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <Card className="partner-card shadow-sm"
             style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <Card.Img variant="top" src={logo4} style={{ objectFit: 'contain', height: '150px', padding: '10px' }} />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <Card className="partner-card shadow-sm"
             style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <Card.Img variant="top" src={logo5} style={{ objectFit: 'contain', height: '150px', padding: '10px' }} />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={2}>
            <Card className="partner-card shadow-sm"
             style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}  >
              <Card.Img variant="top" src={logo6} style={{ objectFit: 'contain', height: '150px', padding: '10px' }} />
            </Card>
          </Col>
        </Row>
      </div>
     </div>

      {/* Contact Form Section */}
      <Contact />
    </>
  );
}

export default Home;
