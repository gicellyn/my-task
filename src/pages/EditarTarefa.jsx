import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { getTarefa, updateTarefa } from "../firebase/tarefas";
import { useEffect } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";


function EditarTarefa() {
    //Extrair o ID na rota dinâmica -- uso da desestruturação
    const { id } = useParams();
    const usuario = useContext(UsuarioContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const navigate = useNavigate();

    function carregarDado() {
        getTarefa(id).then((tarefa) => {
            if (tarefa) {
                //se passar o reset sem nada ele vai limpar, mas se você passar o obj com parâmetro ele mostra os dados, com tanto que os campos estejam com o mesmo nome da tarefa e editar tarefa
                reset(tarefa);
            } else {
                //se não existe tarefas, volta para a pag de listagem
                navigate("/tarefas");
            }
        })
    }

    //esse data são os dados do formulário
    function atualizarTarefa(data) {
        updateTarefa(id, data).then(() => {
            toast.success("Tarefa atualizada com sucesso!");
            navigate("/tarefas");
        })
    }

    useEffect(() => {
        carregarDado();
    }, []);

    if (usuario === null) {
        return <Navigate to="/login"/>
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(atualizarTarefa)}>
                <h1>Editar tarefa</h1>
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
                <Button variant="dark" className="w-100 mt-1" type="submit" >Atualizar Tarefa</Button>
            </form>
        </main>
    );
}

export default EditarTarefa;