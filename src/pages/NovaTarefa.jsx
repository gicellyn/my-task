import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addTarefa } from "../firebase/tarefas";
import toast from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";


function NovaTarefa() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const usuario = useContext(UsuarioContext);

    const navigate = useNavigate();

    function salvarTarefa(data) {
        //Novo campo no documento que associa o usuário e a tarefa que ele criou
        data.idUsuario = usuario.uid;
        //os dados do formulário são passados para a função de inserir
        //the => aguarda a inserção da tarefa para então exibir a toast
        addTarefa(data)
        .then(() => { 
            toast.success("Tarefa adicionada com sucesso!");
            //Redirecionar o usuário para "/tarefas"
            navigate("/tarefas");
        }).catch(() => {
            toast.error("Um erro acontece ao adicionar tarefa!");
        });

    }

    if (usuario === null) {
        return <Navigate to="/login"/>
    }


    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
                <h1>Adicionar tarefa</h1>
                <hr />
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" id="titulo" className="form-control" {...register("titulo", { required: true, maxLength: 200 })} />
                    {errors.titulo && <small className="invalid">O título é inválido!</small>}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" className="form-control" {...register("descricao", { required: true })}></textarea>
                    {errors.descricao && <small className="invalid">A descrição é inválida!</small>}
                </div>
                <div>
                    <label htmlFor="dataConclusao">Data</label>
                    <input type="date" className="form-control" {...register("dataConclusao")} />
                </div>
                <div className="form-check mt-1">
                    <input type="checkbox" id="concluido" className="form-check-input" {...register("concluido")} />
                    <label htmlFor="concluido">Concluído?</label>
                </div>
                <div>
                    <label htmlFor="categoria" >Categoria</label>
                    <select id="categoria" className="form-select" {...register("categoria", { required: true })}>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Projetos">Projetos</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
                <Button variant="dark" className="w-100 mt-1" type="submit" >Salvar Tarefa</Button>
            </form>
        </main>
    );
}

export default NovaTarefa;