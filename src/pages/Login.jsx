import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function login(data) {
        //data é um objeto com os dados do form
        console.log(data);
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(login)}>
                <h1>Login</h1>
                <hr />
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" {...register("email", {required:"O email é obrigatório"})} />
                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" className="form-control" {...register("senha", {required:"A senha é obrigatória", minLength:{value:6, message:"A senha deve ter acima de 6 caracteres"}})} />
                    {errors.senha && <small className="text-danger">{errors.senha.message}</small>}
                </div>
                <Button variant="dark" className="mt-1 w-100" type="submit">Entrar</Button>
                <Button variant="danger" className="mt-1 w-100" type="button">Entrar com Google</Button>
            </form>
        </main>
    );
}

export default Login;