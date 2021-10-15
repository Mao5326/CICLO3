import httpClient from "./httpClient";

const END_POINT = "/api/usuarios";



const getAllUsuarios = () => httpClient.get(END_POINT);
const getUsuarioByusuarioid = (usuarioid) => httpClient.get(`${END_POINT}/usuarioid/${usuarioid}`);
const deleteUsuario = (usuarioid) => httpClient.delete(`${END_POINT}/usuarioid/${usuarioid}`);
const insertUsuario= () =>httpClient.post(`${END_POINT}`, usuario);
const updateusuario = () => httpClient.put(`${END_POINT}/usuarioid/${usuarioid}`, data);

export {
    getAllUsuarios,
    getUsuarioByusuarioid,
    deleteUsuario,
    insertUsuario,
    updateusuario
}