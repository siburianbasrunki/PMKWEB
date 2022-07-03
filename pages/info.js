import Footer from "../components/footer";
import Navigation from "../components/navbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import aboutStyles from "../styles/about.module.css";
import Image from "next/image";
import Link from "next/link";

export default function info() {
  return (
    <>
      <Navigation />
      <div className={aboutStyles.about}>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={8}>
              <Card>
                <Card.Title className={aboutStyles.judul}>INFO</Card.Title>
                <Card.Body>
                  <Col>
                    <Alert variant="light">
                      <Alert.Heading>Pengumuman</Alert.Heading>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae deserunt perspiciatis similique eaque, quasi dicta asperiores. Voluptatibus, culpa debitis eius totam aspernatur dolores? Velit eveniet
                        nulla temporibus cumque dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex excepturi doloremque adipisci fugit cumque modi quam ut, possimus voluptatum eveniet delectus molestiae fuga quis
                        nostrum doloribus eius, hic vel?
                      </p>
                      <Alert.Heading>Oprec Staff</Alert.Heading>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad consequuntur nesciunt ipsam laudantium illum voluptates labore, quae maiores earum incidunt minima illo velit recusandae ut deserunt magni sed at.</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex, ab repellat incidunt enim excepturi repellendus quidem tenetur eius assumenda veritatis odio possimus maiores at minus ipsum consequatur.
                        Reprehenderit, corporis!
                      </p>
                      <Alert.Heading>Lomba/Kompetisi</Alert.Heading>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad consequuntur nesciunt ipsam laudantium illum voluptates labore, quae maiores earum incidunt minima illo velit recusandae ut deserunt magni sed at.</p>
                    </Alert>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Alert.Heading className={aboutStyles.konten}>Update Konten</Alert.Heading>
          <div className={aboutStyles.flexcolumn}>
            <div className={aboutStyles.igkonten}>
              <Image src="/exfeed.jpg" alt="" width="250" height="250" />
            </div>
            <div className={aboutStyles.igkonten}>
              <Image src="/exfeed.jpg" alt="" width="250" height="250" />
            </div>
            <div className={aboutStyles.igkonten}>
              <Image src="/exfeed.jpg" alt="" width="250" height="250" />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
