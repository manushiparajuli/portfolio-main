import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Manushi.jpg";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
            <h1> Manushi Parajuli Portfolio <span className="wave" role="img" aria-labelledby="wave">
                  🙋‍♀️
                </span>{" "}</h1>
            
              <h4 style={{ paddingBottom: 10 }}>
              </h4>
             <h4>-Computer Science Student</h4>
             <h4>-Research Assistant</h4>
             <h4>-Java Developer</h4>  
             <h4>-Mathematics Tutor</h4> 
             <h4>-UI/UX Developer</h4> 
             <h4>-Germinating</h4>
             <></>

              <br />
              <div className="heading-type">
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /> 
              <h4> Cherry on top!🍒</h4>
              {/* Embedding the YouTube video */}
              <iframe
                width="100%"
                height="315"
                src= "https://www.youtube.com/embed/libxwemriDU"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Col>
            
            <Col md={6}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
           

            <Col md={6}>
            <iframe
                width="100%"
                height="315"
                src= "https://www.youtube.com/embed/nuhhrvMDhSA"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              </Col>
          </Row>
          <Row></Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
