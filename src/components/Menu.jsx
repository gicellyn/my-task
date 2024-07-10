import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//Link: esta componente habilita o SPA [single page aplication]
//oBS: se houver links externos utilize a teag <a/>
{/* <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/cadastro">Cadastro</Link>
    <Link to="/ajuda">Ajuda</Link>
</nav> */}

function Menu() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container fluid>
                    <Link to="/"><img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32" /></Link>
                    <Navbar.Toggle /> {/*botão para aparecer o 'hamburguer' na responsividade em tela menor */}
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    )
}

export default Menu;