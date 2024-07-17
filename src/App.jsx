import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Ajuda from "./pages/Ajuda"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Rodape from "./components/Rodape"
import PoliticasPrivacidade from "./pages/PoliticasDePrivacidade"
import NovaTarefa from "./pages/NovaTarefa"
import Tarefas from "./pages/Tarefas"
import { Toaster } from "react-hot-toast"
import EditarTarefa from "./pages/EditarTarefa"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/config"
import { UsuarioContext } from "./contexts/UsuarioContext"


// BrowserRouter: componente essencial para conduzir o roteamento no navegador.
// Route: indicamos a rota(path) e o elemento que será exibido na tela
function App() {
  // o estado de usuário indica se ele está logado ou não na aplicação
  // null = deslogado
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    //para saber se o usuário deslogou
    // a arrow-func vai monitorar/detectar o user conectado/desconectado
    onAuthStateChanged(auth, (user) => {
      //user nulo -> user deslogou
      //se tem objeto -> user logou
      setUsuarioLogado(user);
    })
  }, []);

  //Usuario.Provider é o elemento que irá compartilhar um valor/dado para os elementos filhos da aplicação
  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/politicas-de-privacidade" element={<PoliticasPrivacidade />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
            <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </UsuarioContext.Provider>
    </>
  )
}

export default App
