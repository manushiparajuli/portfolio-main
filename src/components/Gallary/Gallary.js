import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/Projects/Google.png";
import PresidentList from "../../Assets/President's List.png";
import LastMile from "../../Assets/unnamed.png";
import NSF from "../../Assets/NSF.jpg";
import Hackerrank from "../../Assets/Hackerrank.png";
import Java from "../../Assets/Java.png";
import IICC from "../../Assets/IICC.png";
import Uniglobe from "../../Assets/Uniglobe.png";
import Uniglobee from "../../Assets/Uniglobee.png";
import ILMUNC from "../../Assets/ILMUNC.png";
import ACM from "../../Assets/ACM.jpg";
import JBC from "../../Assets/JBC.png";
import DMT from "../../Assets/DMT.jpg";
import Hackathon from "../../Assets/Hackathon.png";


function Gallery() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={myImg} alt="Manushi " />
            <Card.Body>
              <Card.Title>Google</Card.Title>
              <Card.Text>Agile Project Management Certification</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={PresidentList} alt="President's List" />
            <Card.Body>
              <Card.Title>President's List</Card.Title>
              <Card.Text>Fall 2019, Fall 2022, Fall 2023, Spring 2023, Summer 2023
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={NSF} alt="NSF" />
            <Card.Body>
              <Card.Title>NSF Funded Training</Card.Title>
              <Card.Text>Trained on Smarthealthcare</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={LastMile} alt="LastMile" />
            <Card.Body>
              <Card.Title>Scolarship</Card.Title>
              <Card.Text>LastMile Newsletter</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Hackerrank} alt="Hackerrank" />
            <Card.Body>
              <Card.Title>Hackerrank</Card.Title>
              <Card.Text>SQL</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Java} alt="Hackerrank Java" />
            <Card.Body>
              <Card.Title>Hackerrank</Card.Title>
              <Card.Text>Java</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={IICC} alt="IICC" />
            <Card.Body>
              <Card.Title>International Ironman Contest</Card.Title>
              <Card.Text>Technology Award Winner</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4}>
          <Card>
            <Card.Img variant="top" src={ILMUNC} alt="ILMUNC" />
            <Card.Body>
              <Card.Title>ILMUNC Participant</Card.Title>
              <Card.Text>Delegate of Spain in League of Nations</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Uniglobee} alt="Unigloble Hackathon" />
            <Card.Body>
              <Card.Title>Hackathon</Card.Title>
              <Card.Text>Uniglobe Hackathon First Runner Up</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Uniglobe} alt="IICC" />
            <Card.Body>
              <Card.Title>Physics Presentation</Card.Title>
              <Card.Text>Physics Presentation First Runner Up</Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4}>
          <Card>
            <Card.Img variant="top" src={JBC} alt="JBC" />
            <Card.Body>
              <Card.Title>Junior Breakthrough Challenge</Card.Title>
              <Card.Text>Top 10% in Junior Breakthrough Challenge</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={ACM} alt="Unigloble Hackathon" />
            <Card.Body>
              <Card.Title>ACM-W Media</Card.Title>
              <Card.Text>Media and Outreach Officer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
          <Col md={4}>
          <Card>
            <Card.Img variant="top" src={DMT} alt="JBC" />
            <Card.Body>
              <Card.Title>DMT conference</Card.Title>
              <Card.Text>Participated in DMT conference</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Hackathon} alt="IICC" />
            <Card.Body>
              <Card.Title>Dare Mighty Things Hackathon</Card.Title>
              <Card.Text>Developed a chatbot demo for Ulta Beauty</Card.Text>
            </Card.Body>
          </Card>
          </Col>
      </Row>

    </Container>
  );
}

export default Gallery;
