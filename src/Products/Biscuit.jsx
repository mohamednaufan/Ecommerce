import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Footer from '../Footer';


function Biscuit() {

  const [datas, setDatas] = useState([])


  let Giturl = "https://raw.githubusercontent.com/mohamednaufan/Ecommerce/refs/heads/main/src/assets/"


  const navigate = useNavigate()

  useEffect(() => {
    GetData();
  }, []);

  async function GetData() {
    let data = await axios.get("https://67d2872190e0670699bdf31c.mockapi.io/Admin/Admin")
      .then(response => setDatas(response.data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };
  const handleClick = (id) => {
    console.log(id);
    navigate(`/showproduct/${id}`)
  }

 let filterData = datas?.filter(a => a.listingType === "Biscuit"); 
 let bannerFilter = datas.filter(b => b.name == "Bounce Biscuit")
  
  return (
    <div>


<Container>
{bannerFilter.map(item=>
         <img
         style={{height:'80vh'}}
        className='w-100 d-block vh-50'
        src={Giturl + item.image}
        alt='banner'
        />
       )}
       
        <h2 className='mt-5'><i>The healthy Biscuits</i></h2>
        <Row>
   {filterData.map(items=>
     <Col md={3} onClick={() => handleClick(items.id)}>
     <Card style={{ width: '100%', height: 'auto', marginTop: '30px' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.54)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
       <Card.Img variant="top" src={Giturl + items.image} style={{height:'254px'}}  className='hoverimage'/>
       <Card.Body>
         <Card.Title className='fs-6'>{items.name}</Card.Title>
         <Card.Text>
          {items.price}
         </Card.Text>
         <Button variant="primary">Buy Now</Button>
       </Card.Body>
     </Card>
     </Col>
   )}
    </Row>

    
    </Container>

      <div style={{marginTop:'100px'}}>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Biscuit