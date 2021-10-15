import httpClient from "./httpClient";

const END_POINT = "/api/servicios";



const getAllServicios = () => httpClient.get(END_POINT);
const getServicioBycpeID = (cpeID) => httpClient.get(`${END_POINT}/cpeID/${cpeID}`);
const deleteServicio = (cpeID) => httpClient.delete(`${END_POINT}/cpeID/${cpeID}`);
const insertServicio = (servicio) =>httpClient.post(`${END_POINT}`, servicio);
const updateServicio = (cpeID, data) => httpClient.put(`${END_POINT}/cpeID/${cpeID}`, data);

export {
    getAllServicios,
    getServicioBycpeID,
    deleteServicio,
    insertServicio,
    updateServicio
}

