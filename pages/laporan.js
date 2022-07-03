import Footer from "../components/footer";
import Navigation from "../components/navbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import aboutStyles from "../styles/about.module.css";

export default function laporan() {
  return (
    <>
      <Navigation />
      <div className={aboutStyles.about}>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={8}>
              <Card>
                <Card.Body>
                  <Col>
                    <Alert variant="light">
                      <Alert.Heading>Laporan Keuangan</Alert.Heading>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae deserunt perspiciatis similique eaque, quasi dicta asperiores. Voluptatibus, culpa debitis eius totam aspernatur dolores? Velit eveniet
                        nulla temporibus cumque dolor.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae, corrupti tenetur quisquam natus quos perspiciatis cumque similique consequuntur corporis voluptatibus sed consequatur expedita maxime repellat
                        saepe reiciendis voluptatum? Dolor.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex excepturi doloremque adipisci fugit cumque modi quam ut, possimus voluptatum eveniet delectus molestiae fuga quis nostrum doloribus eius, hic vel?
                      </p>
                    </Alert>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
