// O propósito deste arquivo é ter todas as funções necessárias para gerenciar tarefas (CRUD - Create, Read, Update, Delete):
// - adicionar uma nova tarefa (Create)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./config";

//Criar uma referência para a coleção no Firestore
export const tarefasCol = collection(db, "tarefas");

//Função assíncrona = que o resultado não é obtido de imediato, então haverá uma "espera"
export async function addTarefa(data) {
    //Essa função se comunica com o firestore, envia os dados (data) e salva na coleção
    //await é uma instrução para esperar o resultado de addDoc
    await addDoc(tarefasCol, data);
}

export async function getTarefas() {
    //snapshot é o resultado da busca na coleção de tarefas
    const snapshot = await getDocs(tarefasCol); // puxa os documentos da coleção do Firebase
    const tarefas = []; //array vazio que vai inserir os obj na forma de obj e não de doc como vem do Firebase

    //Percorremos cada documento da coleção e inserimos no array de tarefas
    snapshot.forEach((doc) => {//percorre esse snapshot, e para cada doc coloca nesse obj tarefas
        tarefas.push({ ...doc.data(), id: doc.id }); //usando spread, vai ter um novo array de objetos no formato que a gnt precisa
    })

    return tarefas;
}

//Função responsável por deletar 
export async function deleteTarefa(id) {
    //doc do firebase serve para criar uma referência para um odcumento da coleção-- diz qual a coleção e o id
    const tarefaDoc = doc(tarefasCol, id);
    await deleteDoc(tarefaDoc);
}

export async function getTarefa(id) {
    //Criar uma referência para um doc especifico da coleção
    const tarefaDoc = doc(tarefasCol, id);
    //trazer as informações do documento
    const tarefa = await getDoc(tarefaDoc);

    //retorna os dados dentro do documento-- tbm transforma os metadados que vem do firebase, retirando os dados [necessários]  // {titulo: '', descricao: '', ...}
    return tarefa.data();

}

//id ta tarefa e os dados
export async function updateTarefa(id, data) {
    const tarefaDoc = doc(tarefasCol, id);
    await updateDoc(tarefaDoc, data);
}