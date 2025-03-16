import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [image, setImage] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  // Fetching data on component mount
  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    axios
      .get("https://67d2872190e0670699bdf31c.mockapi.io/Admin/Admin")
      .then((response) => {
        const products = response.data;
        setImage(products);
        setFilteredProducts(products); // Initially show all products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleClick = (id) => {
    const clickedProduct = image.find(product => product.id === id);
    if (clickedProduct) {
      const category = clickedProduct.listingType;
      const filtered = image.filter(product => product.listingType === category);
      setFilteredProducts(filtered);
    }
    navigate(`/showproduct/${id}`); 
  };

  let Giturl = "https://raw.githubusercontent.com/mohamednaufan/Ecommerce/refs/heads/main/src/assets/";

  return (
    <Container className='mb-3'>
      <h2
        className="text-center mb-4"
        style={{
          fontSize: '2rem', 
          fontWeight: '600', 
          color: '#2c3e50', 
          textTransform: 'capitalize', 
          letterSpacing: '1px', 
          display: 'inline-block',
          position: 'relative', 
          marginTop: '25px', 
          fontFamily: '"Georgia", "Times New Roman", serif', 
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#e74c3c';
          e.target.style.borderBottom = '3px solid #e74c3c';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#2c3e50';
          e.target.style.borderBottom = '3px solid transparent';
        }}
      >
        Explore Popular Categories
      </h2>

      <Row className="mt-2 g-4">
        {/* Loop through the filtered products and display them */}
        {filteredProducts.map((item) => (
          <Col md={3} sm={6} xs={12} key={item.id}>
            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.54)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = 'none';
                 }}
              onClick={() => handleClick(item.id)} // Navigate to product details page on card click
            >
              <Card.Img
                variant="top"
                src={Giturl + item.image}
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
              <Card.Body>
                <Card.Title className="fs-5" style={{ fontWeight: '700', color: '#333' }}>
                  {item.name}
                </Card.Title>
                <Card.Text style={{ fontSize: '1rem', color: '#555' }}>
                  {item.price} INR
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ width: '100%' }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the handleClick when clicking Buy Now
                    navigate(`/showproduct/${item.id}`); // Navigate to the product details page when Buy Now is clicked
                  }}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
