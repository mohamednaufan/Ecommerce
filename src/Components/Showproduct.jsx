import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure toast styling
import { useCart } from './CartContext'; // Import useCart to access cart context

function ShowProduct() {
    const [datas, setDatas] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const { id } = useParams();
    const { addToCart } = useCart(); // Get the addToCart function from context

    let Giturl = "https://raw.githubusercontent.com/mohamednaufan/Ecommerce/refs/heads/main/src/assets/";

    useEffect(() => {
        // Fetch the data
        GetData();
    }, []);

    // Fetch data from the API
    async function GetData() {
        try {
            const response = await axios.get("https://67d2872190e0670699bdf31c.mockapi.io/Admin/Admin");
            setDatas(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Filter the product data based on the id
    const filterData = datas.filter(a => a.id == id);

    const handleClick = () => {
        setIsClicked(!isClicked);
        if (!isClicked) {
            toast.success("Added to Wishlist!");
        } else {
            toast.info("Removed from Wishlist");
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product); // Add the product to the cart
        toast.success("Added to Cart");
    };

    return (
        <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh", paddingTop: "50px" }}>
            <Container className="py-5">
                <Row className="justify-content-center">
                    {filterData.length > 0 && filterData.map((a) => (
                        <Col md={8} lg={6} key={a.id}>
                            <Card className="shadow-lg rounded">
                                <Row noGutters>
                                    {/* Left Section - Product Image */}
                                    <Col md={6}>
                                        <Card.Img 
                                            variant="top" 
                                            src={Giturl + a.image} 
                                            alt={a.name} 
                                            style={{ objectFit: 'cover', height: '400px' }}
                                            className='p-4'
                                        />
                                    </Col>

                                    {/* Right Section - Product Info */}
                                    <Col md={6} className="p-4 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className='text-end'>
                                                <button 
                                                    style={{
                                                        backgroundColor: isClicked ? "red" : "#fff",
                                                        border: 'none',
                                                        borderRadius: '50%',
                                                        cursor: 'pointer',
                                                        padding: '10px',
                                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                                        transition: 'background-color 0.3s ease',
                                                    }} 
                                                    onClick={handleClick}
                                                >
                                                    <FaRegHeart className="fs-4" />
                                                </button> 
                                            </div>
                                            {/* Product Name */}
                                            <h4 className="text-dark font-weight-bold">{a.name}</h4>
                                            <h5 className="my-3 text-danger">
                                                <strong>Price: </strong>
                                                {a.price} INR
                                            </h5>
                                            <p className="text-muted">
                                                <strong>Category:</strong> {a.listingType}
                                            </p>
                                            <p className="text-muted mb-4">
                                                <strong>Description:</strong> {a.description}
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <Button 
                                                variant="warning" 
                                                className="w-48" 
                                                onClick={() => handleAddToCart(a)} // Call handleAddToCart on button click
                                            >
                                                Add to Cart
                                            </Button>
                                            <Button 
                                                variant="warning" 
                                                className="w-48" 
                                                onClick={() => toast.success("Proceeding to Buy")}
                                            >
                                                Buy Now
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <ToastContainer />
            </Container>
        </div>
    );
}

export default ShowProduct;
