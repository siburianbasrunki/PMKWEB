import Image from "next/image"
import Footer from "../components/footer";
import Navigation from "../components/navbar";
import style from "../styles/Home.module.css";
import { Row,Col,Card, Container} from "react-bootstrap";
import Link from "next/link"
// import Ibadah from "../public/Ibadah.png"
export default function Ibadah() {
  return (
    <>
    <Navigation/>
    <div className={style['info']} id="ibadah">
      <div className={style['info-bg']} >
      </div>
    </div>
    {/* 18rem */}
    <Container>
      <div className="text-center mt-4">
        <h4>Daftar Ibadah Yang akan Dilaksanakan</h4>
      </div>
    <Row>
    <Col md={4} className={style['card']} id="">
        <Card className="bg-white rounded ">
          <Image src="/Ibadah.png" alt="ibadah" className="images" width='200' height='200' />
            <div className="bg-dark ">
              <div className="m-1 p-2 text-white">
                <Card.Title className=" text-center "><a href="#">IBADAH 1</a></Card.Title>
                <Card.Text className=" text-left">Hari/Tanggal</Card.Text>
                <Card.Text className=" text-left">Topik Ibadah</Card.Text>
                <Card.Text className=" text-left">Pengkhotbah</Card.Text>

              </div>
            </div>
        </Card>
    </Col>
    <Col md={4} className={style['card']} id="">
        <Card className="bg-white  ">
          <Image src="/Ibadah.png" alt="ibadah" className="images" width='200' height='200' />
            <div className="bg-dark ">
              <div className="m-1 p-2 text-white">
              <Card.Title className=" text-center "><a href="#">IBADAH 2</a></Card.Title>
                <Card.Text className=" text-left">Hari/Tanggal</Card.Text>
                <Card.Text className=" text-left">Topik Ibadah</Card.Text>
                <Card.Text className=" text-left">Pengkhotbah</Card.Text>

              </div>
            </div>
        </Card>
    </Col>
    <Col md={4} className={style['card']} id="">
        <Card className="bg-white  ">
          <Image src="/Ibadah.png" alt="ibadah" className="images" width='200' height='200' />
            <div className="bg-dark ">
              <div className="m-1 p-2 text-white">
              <Card.Title className=" text-center "><a href="#">IBADAH 3</a></Card.Title>
                <Card.Text className=" text-left">Hari/Tanggal</Card.Text>
                <Card.Text className=" text-left">Topik Ibadah</Card.Text>
                <Card.Text className=" text-left">Pengkhotbah</Card.Text>

              </div>
            </div>
        </Card>
    </Col>
    </Row>
    </Container>
    
    <Footer/>
    

    </>
  )
}
