import { Nav } from "react-bootstrap";
import "../assets/Rodape.css"
import { Link } from "react-router-dom";

function Rodape() {
    return(
        <div className="footer">
            <section className="section">
                <h3>MayTask</h3>
                <p >©2024 MayTask. Todos os direitos reservados.</p>
            </section>
            <Nav className="lista-infos">
                <Link className="nav-link" to="/politicas-de-privacidade">Politicas de Privacidade</Link>
                <Link className="nav-link">Contato</Link>
                <Link className="nav-link">Sobre nós</Link>
            </Nav>
        </div>
    )
}

export default Rodape;