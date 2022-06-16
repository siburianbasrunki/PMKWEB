import style from "../components/component.module.css"
const Footer = () => {
    return(
        <footer className="page-footer font-small blue pt-4 ">
        <div className="container-fluid text-center text-md-left mt-4">
            <h5 className="text-uppercase text-center">Persekutuan Mahasiswa Kristen ITERA</h5>
        </div>
        <div className="footer-copyright text-center py-3">© 2022 Copyright:
            <div className={style['a']}>
            <a href="https://www.instagram.com/pmk_itera/" > PMK ITERA </a>
            </div>
        </div>
    
    </footer>
    )
};
export default Footer;