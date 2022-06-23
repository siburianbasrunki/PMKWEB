import { Nav, Container, NavDropdown, Form, FormControl, Navbar, Button, NavLink } from "react-bootstrap";
import style from "../components/component.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className={style["nav shadow"]}>
      <Container fluid>
        <Navbar.Brand href="/">
          <Image alt="" src="/logopmk.png" width="20" height="20" href="/" className="d-inline-block align-top" /> PMK ITERA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "auto" }} navbarScroll>
            <NavDropdown title="Tentang PMK ITERA" id="navbarScrollingDropdown">
              <NavDropdown.Item className={style["link"]}>
                {" "}
                <Link href="/about">
                  <a> Apa Itu PMK?</a>
                </Link>{" "}
              </NavDropdown.Item>
              <NavDropdown.Item className={style["link"]}>
                <Link href="/sejarah">
                  <a>Sejarah</a>
                </Link>{" "}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className={style["link"]}>
              <Link href="/pengurus">
                <a>Pengurus</a>
              </Link>
            </Nav.Link>
            <NavDropdown title="Info Pmk Itera" id="navbarScrollingDropdown">
              <NavDropdown.Item className={style["link"]}>
                <Link href="/info#ibadah">
                  <a>Jadwal Ibadah</a>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className={style["link"]}>
                <Link href="/info#event">
                  <a>Event</a>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Layanan" id="navbarScrollingDrodown">
              <NavDropdown.Item className={style["link"]}>
                <Link href="/layanan">
                  <a>Aspirasi & Konseling </a>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
