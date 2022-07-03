import Footer from "../components/footer";
import Navigation from "../components/navbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import aboutStyles from "../styles/about.module.css";
import Image from "next/image";

export default function layanan() {
  return (
    <>
      <Navigation />
      <div className={aboutStyles.about}>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={8}>
              <Card>
                <Image src="/layanan.png" alt="Layanan" className="images" width="524" height="262" objectFit="cover" objectPosition="center" />
                <Card.Body>
                  <Col>
                    <Alert variant="light">
                      <Alert.Heading>Layanan</Alert.Heading>
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
                      <Alert.Heading>Diakonia PMK ITERA</Alert.Heading>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad consequuntur nesciunt ipsam laudantium illum voluptates labore, quae maiores earum incidunt minima illo velit recusandae ut deserunt magni sed at.</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex, ab repellat incidunt enim excepturi repellendus quidem tenetur eius assumenda veritatis odio possimus maiores at minus ipsum consequatur.
                        Reprehenderit, corporis!
                      </p>
                      <Alert.Heading>Surat Izin dan Pengajuan</Alert.Heading>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad consequuntur nesciunt ipsam laudantium illum voluptates labore, quae maiores earum incidunt minima illo velit recusandae ut deserunt magni sed at.</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex, ab repellat incidunt enim excepturi repellendus quidem tenetur eius assumenda veritatis odio possimus maiores at minus ipsum consequatur.
                        Reprehenderit, corporis!
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
