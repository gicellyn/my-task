import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

//Link: esta componente habilita o SPA [single page aplication]
//OBS: se houver links externos utilize a tag <a/>

function Menu() {
    const usuario = useContext(UsuarioContext)
    const navigate = useNavigate();

    function handleLogout() {
        logout().then(() => {
            toast.success("Você foi deslogado!");
            navigate("/login");
        });
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container fluid>
                    <Link to="/"><img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32" /></Link>
                    <Navbar.Toggle /> {/*botão para aparecer o 'hamburguer' na responsividade em tela menor */}
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            {usuario && <Link className="nav-link" to="/tarefas">Tarefas</Link>}
                            {!usuario && <Link className="nav-link" to="/login">Login</Link>}
                            {!usuario && <Link className="nav-link" to="/cadastro">Cadastro</Link>}
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                            {usuario && <span className="text-light nav-link">{usuario.displayName}</span>}
                            {usuario && <Button variant="outline-light" onClick={handleLogout}>Sair</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    )
}

export default Menu;