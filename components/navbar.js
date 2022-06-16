import { Nav,Container,NavDropdown,Form,FormControl,Navbar,Button, NavLink} from "react-bootstrap";
import style from "../components/component.module.css"
import Link from "next/link";
export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className={style["nav"]}  >
        <Container fluid>
        <Navbar.Brand href="/">
            <img
              alt=""
              src="./logopmk.png"
              width="30"
              height="30"
              href="/"
              className="d-inline-block align-top"
            />{' '}
            PMK ITERA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: 'auto' }}
              navbarScroll
            >
              
              <NavDropdown title="Tentang PMK ITERA" id="navbarScrollingDropdown">
                
                <NavDropdown.Item > Apa Itu PMK? </NavDropdown.Item>
                <NavDropdown.Item ><Link href="about">Sejarah</Link> </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pengurusan" id="navbarScrollingDropdown">
                <NavDropdown.Item ><Link href="/pengurus">Divisi Programing</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Info Pmk Itera" id="navbarScrollingDropdown">
                <NavDropdown.Item ><Link href="/info"> Jadwal Ibadah</Link></NavDropdown.Item>
                <NavDropdown.Item href="#">Event</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Layanan" id="navbarScrollingDrodown">
                <NavDropdown.Item ><Link href="/layanan">Aspirasi & Konseling </Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
