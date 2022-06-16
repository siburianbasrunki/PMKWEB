import { Container,Row,Col,Card,Image } from "react-bootstrap"
import style from "../components/component.module.css"
const Content = () => {
    return(
        <div>
        <Container className={style['content']}>
          <br />
          <br />
          <Row>
            <Col md={4} className="" id="">
              <Card className="bg-white  ">
                <Image src="/Ibadah.png" alt="ibadah" className="images" />
                <div className="bg-dark ">
                  <div className="m-1 p-2 text-white">
                    <Card.Title className=" text-center "><a href="#">IBADAH</a></Card.Title>
                    <Card.Text className=" text-left">Shalom teman-teman! Di halaman ini, teman-teman dapat melihat dan mengakses ibadah-ibadah rutin yang biasa kami adakan tiap minggunya selama masa pembelajaran di ITERA berlangsung. Pada umumnya kami mengadakan Ibadah Jumat</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="">
              <Card className="bg-white  ">
                <Image src="/AcaraBesar.png" alt="acarabesar" className="images" />
                <div className="bg-dark ">
                  <div className="m-1 p-2 text-white">
                    <Card.Title className=" text-center"><a href="#">ACARA BESAR / EVENT</a></Card.Title>
                    <Card.Text className=" text-left">Halaman ini berisi informasi mendalam mengenai acara besar yang sedang atau akan dipersiapkan dan dilaksanakan PMK ITERA. Acara besar mencakup kegiatan-kegiatan tahunan seperti ibadah Paskah, rangkaian kegiatan Pemerimaan Mahasiswa </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="">
              <Card className="bg-white  ">
                <Image src="/layanan.png" alt="layanan" className="images" />
                <div className="bg-dark ">
                  <div className="m-1 p-2 text-white">
                    <Card.Title className=" text-center"><a href="#">LAYANAN</a></Card.Title>
                    <Card.Text className=" text-left">Halaman ini berisi berbagai informasi mengenai layanan-layanan nonibadah yang dilakukan oleh divisi-divisi di PMK. Layanan-layanan mencakup permohonan surat izin, surat SKAO/SKPI, konseling, prayer request, hingga perpustakaan daring. </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Content;