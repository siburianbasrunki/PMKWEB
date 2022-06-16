import { Nav,Container,NavDropdown,Form,FormControl,Navbar,Button, NavLink} from "react-bootstrap";
import style from "../components/component.module.css"
import Logo from "../public/logopmk.png"
export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className={style["nav"]}  >
        <Container fluid>
        <Navbar.Brand href="#">
            <img
              alt=""
              src="./logopmk.png"
              width="30"
              height="30"
              href="#home"
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
                <NavDropdown.Item href="#">Sejarah</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pengurusan" id="navbarScrollingDropdown">
              {/* <Routes>
              <Route path="pengurus" exact component={Pengurus} />
              </Routes> */}
                <NavDropdown.Item >Divisi Programing</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Info Pmk Itera" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Jadwal Ibadah</NavDropdown.Item>
                <NavDropdown.Item href="#">Event</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Layanan" id="navbarScrollingDrodown">
                <NavDropdown.Item href="#">Aspirasi & Konseling</NavDropdown.Item>
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
