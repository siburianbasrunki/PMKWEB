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
            <Col lg={4}>
              <Alert variant="light">
                <Alert.Heading>IBADAH JUMAT</Alert.Heading>
                <Row>
                  <Col>
                    <p className="ibadah-icon">
                      <img src="/calendar-event-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Tanggal" />
                      Jumat, 21 Juni 2022
                    </p>
                  </Col>
                  <Col>
                    <p className="ibadah-icon">
                      <img src="/clock-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Time" />
                      08.00 WIB
                    </p>
                  </Col>
                  <Col>
                    <a href="#" target="_blank" className="ibadah-icon">
                      <img src="/geo-alt-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Tempat" />
                      Zoom Meeting
                    </a>
                  </Col>
                </Row>
                <Alert.Heading>PERSEKUTUAN LPMI</Alert.Heading>
                <Row>
                  <Col>
                    <p className="ibadah-icon">
                      <img src="/calendar-event-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Tanggal" />
                      Jumat, 21 Juni 2022
                    </p>
                  </Col>
                  <Col>
                    <p className="ibadah-icon">
                      <img src="/clock-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Time" />
                      08.00 WIB
                    </p>
                  </Col>
                  <Col>
                    <a href="#" target="_blank" className="ibadah-icon">
                      <img src="/geo-alt-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Tempat" />
                      Zoom Meeting
                    </a>
                  </Col>
                </Row>
                <Alert.Heading>WEEKLY MEETING LPMI</Alert.Heading>
                <Row>
                  <Col>
                    <p className="ibadah-icon">
                      <img src="/calendar-event-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Tanggal" />
                      Jumat, 21 Juni 2022
                    </p>
                  </Col>
                  <Col>
                    <p className="ibadah-icon">
                      <img src="/clock-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Time" />
                      08.00 WIB
                    </p>
                  </Col>
                  <Col>
                    <a href="#" target="_blank" className="ibadah-icon">
                      <img src="/geo-alt-fill.svg" width="15" height="15" className="d-inline-block align-top" alt="Tempat" />
                      Zoom Meeting
                    </a>
                  </Col>
                </Row>
              </Alert>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
