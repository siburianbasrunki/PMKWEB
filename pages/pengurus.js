import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Footer from "../components/footer";
import Navigation from "../components/navbar";
import style from "../styles/Home.module.css";

export default function Pengurus() {
  return (
    <>
    
    
    <div className={style['main-pengurus']}>
    <Navigation/>
      <div >
        <div className="text-center">
          <h3>
            Struktur Pengurus PMK ITERA
          </h3>
          <h4>
            2022  
          </h4>
        </div>
        <div className={style['pembina']}>
        <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='200' height='200' />  
        <h4 className="text-center">Basrunki Siburian</h4>
        <h6 className="text-center">Pembina PMK ITERA</h6>

        </div>
        <div className={style['bawahan']}>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='200' height='200' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5 className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='200' height='200' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='200' height='200' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='200' height='200' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
        </div>
      </div>
    </div>
    {/* bagian BPH   */}
    <div className={style['bph']}>
      <div className="">
        <Row >
          <Col md={6}>
            <h3 className="text-center">BPH 1</h3>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={style['bawahan']}>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5 className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
        </div>
          </Col>

          <Col md={6}>
            <h3 className="text-center">BPH 2</h3>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={style['bawahan']}>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5 className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
        </div>
          </Col>
          <Col md={6}>
            <h3 className="text-center">BPH 3</h3>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={style['bawahan']}>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5 className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
        </div>
          </Col>
           <Col md={6}>
            <h3 className="text-center">BPH 4</h3>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={style['bawahan']}>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5 className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
          <div>
            <Image src="/profil.png" alt="ibadah" className="rounded-circle"  width='100' height='100' />  
            <h5  className="text-center">Nama bawahan 1</h5>
            <h5  className="text-center">jabatan sebagai bawahan</h5>
          </div>
        </div>
          </Col>
        </Row>
      </div>
        
    </div>
    <Footer/>
    </>
  )
}
