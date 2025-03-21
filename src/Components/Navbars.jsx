import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useCart } from '../Components/CartContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function Navbars() {
  const { cart } = useCart();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  
  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  const Giturl = "https://raw.githubusercontent.com/mohamednaufan/Ecommerce/refs/heads/main/src/assets/";

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary bg-white py-3">
        <Container>
        <Navbar.Brand
        href="/"
        style={{
          fontFamily: '"Roboto", sans-serif', 
          fontSize: '1.5rem', 
          fontWeight: '700',
          color: '#111',
          textTransform: 'none', 
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease', 
          padding: '5px 10px', 
          display: 'inline-block', 
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'blue'; 
          e.target.style.transform = 'scale(1.05)'; 
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#111'; 
          e.target.style.transform = 'scale(1)'; 
        }}
      >
        MN-Agency
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/" className='mx-2'>Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Item href="/Biscuit">Biscuit</NavDropdown.Item>
                <NavDropdown.Item href="/Nuts">Nuts</NavDropdown.Item>
                <NavDropdown.Item href="/Chips">Chips</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Contact">Contact us</Nav.Link>
            </Nav>
            
            <Link to="/Login" className='mx-2'>
              <button className='btn btn-outline-success'>
                <span className="fa-solid fa-right-to-bracket mx-2"></span>Login
              </button>
            </Link>
            <Link to="/Signup">
              <button className='btn btn-outline-success'>
                <span className="fa-solid fa-right-to-bracket mx-2"></span>Register
              </button>
            </Link>

            {/* Cart Button */}
            <Nav.Link href="#" className='' onClick={handleOffcanvasShow}>
              <span className='btn btn-outline-success ms-2'>
                <span className="fa-solid fa-cart-shopping mx-2"></span>
                Cart ({cart.length})
              </span>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <div>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-3">
                    <img 
                      src={Giturl + item.image}  
                      alt={item.name} 
                      style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                    />
                    <div>
                      <strong>{item.name}</strong><br />
                      ${item.price} x {item.quantity}<br/>
                    </div>
                  </li>
                  
                ))}
              </ul>

              {/* Total price */}
              <hr />
              {/* <div>
                <strong>Total Price: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</strong>
              </div> */}
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbars;
