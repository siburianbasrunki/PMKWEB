// import "./pagesatu.css";
import { Container,Row,Col} from "react-bootstrap";
import style from "../components/component.module.css"
// import styles from "./global.css"
const Jumbotron = () =>{
    return(
        <div className={style['home']} >
        <Container className="text-black text-center d-flex justify-content-center align-items-center ">
          <Row>
          <Col md={6} className={style['intro']}>
              <img src="/logopmk.png" alt="" width={300} height={300}/>
            </Col>
            <Col>
            <div className={style['intro-text']}>
            <div className="title">SELAMAT DATANG DI OFFICAL WEBSITE</div>
              <div className="title">PERSEKUTUAN MAHASISWA KRISTEN ITERA</div>
              <div className="title">--PMK ITERA--</div>
            </div>
            </Col>
            
          </Row>
        </Container>
      </div>
    )
}

export default Jumbotron;