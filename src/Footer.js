import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <>
            <div id="Foot">
                <div className="container" id="Foot">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to="/yield" className="nav-link px-2 text-muted">Yield</Link></li>
                    <li className="nav-item"><Link to="/data" className="nav-link px-2 text-muted">Data</Link></li>
                    </ul>
                    <p className="text-center text-muted">&copy; 2023 Company, Inc</p>
                </footer>
                </div>
            </div>
        </>
     );
}
 
export default Footer;