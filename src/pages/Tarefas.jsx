import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { deleteTarefa, getTarefas } from "../firebase/tarefas";
import { useState, useEffect, useContext } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Tarefas() {
    //usa o estado pois alterna entre carregando e mostrando as tarefas
    //usa-se o state pois os dados não estão no código e sim em um banco de dados(uso do async na busca dos dados em tarefas.js)
    const [tarefas, setTarefas] = useState(null);
    //agora tem acesso aos dados dos usuários.
    //Recuperamos a informação do usuário (se está logado ou não)
    const usuario = useContext(UsuarioContext);

    const navigate = useNavigate();

    function carregarDados() {
        //o then devolve a lista de tarefas da coleção
        getTarefas().then((resultados) => {
            setTarefas(resultados);
        })
    }

    function deletarTarefas(id) {
        //true -> apagar a tarefa, false -> não fazer nada
        const deletar = confirm("Tem certeza?");
        if (deletar) {
            deleteTarefa(id)
                .then(() => {
                    toast.success("Tarefa excluída com sucesso!");
                    //vai trazer a lista de tarefas atualizada
                    carregarDados();
                })

        }
    }

    // Executar um função quando o componente é renderizado a primeira vez
    useEffect(() => {
        carregarDados();
    }, []);

    //Se o usuário não está logado
    if (usuario === null) {
        //Navegar para outra pagina
        //usa o componente Navigate quando é para retonar e tiver dentro de uma condição
        return <Navigate to="/login"/>
    }

    return (
        <main className="corpo-tarefas">
            <Container className="corpo-tarefas mt-5">
                <h1>Suas tarefas</h1>
                <hr />
                <Link className="btn btn-dark" to="/tarefas/adicionar">Adicionar tarefa</Link>
                {
                    tarefas ? <section className="mt-2">{tarefas.map((tarefa) => {
                        return <Card key={tarefa.id}>
                            <Card.Body>
                                <Card.Title>{tarefa.titulo}</Card.Title>
                                <Card.Text>{tarefa.descricao}</Card.Text>
                                <div className="mb-2">
                                    {tarefa.concluido ? <Badge bg="success">Concluído</Badge> : <Badge bg="warning">Pendente</Badge>}
                                    <Badge bg="dark">{tarefa.categoria}</Badge>
                                    {/* <Badge bg="dark">{new Date(tarefa.dataConclusao).toLocaleDateString()}</Badge> */}
                                </div>
                                <Button variant="outline-dark" onClick={() => {
                                    navigate(`/tarefas/editar/${tarefa.id}`)
                                }}><span class="material-symbols-outlined">
                                edit
                                </span></Button>
                                <Button variant="outline-danger" onClick={() => deletarTarefas(tarefa.id)}><span class="material-symbols-outlined">
                                    delete
                                </span></Button>
                            </Card.Body>
                        </Card>
                    })}</section> : <Loader />
                }
            </Container>
        </main>
    )
}

export default Tarefas;