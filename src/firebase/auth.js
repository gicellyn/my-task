//O objetivo dese arquivo é ter tdas as funções relacionadas a autenticação
//criar usuário com email/senha/nome
//entrar com google
//entrar com email/senha
//logout
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./config";

export async function cadastrarUsuario(nome, email, senha) {
    // Indicamos o serviço de autenticação e o email e senha do novo usuário
    //user é um obj com informações do usuário autenticado
    const { user } = await createUserWithEmailAndPassword(auth, email, senha);
    //define o nome de exibição como o nome vindo do form de cadastro
    await updateProfile(user, {displayName: nome})
}

export async function entrarGoogle() {
    //indicar qual o provedor de login será usado
    const provider = new GoogleAuthProvider();
    //processo de autenticação por isso o await
    // Abre um pop-up na tela com o login do google
    await signInWithPopup(auth, provider);
}

export async function loginUsuario(email, senha) {
    await signInWithEmailAndPassword(auth, email, senha)
}

export async function logout(){
    //Desconectar o user atualmente logado na aplicação
    await signOut(auth);
}