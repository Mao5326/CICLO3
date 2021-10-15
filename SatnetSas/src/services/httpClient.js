import axios from "axios";

const httpClient = axios.create({
setTimeout: 3000,
headers: {
    "Content-Type": "aplication/json"
    }
})

export default httpClient;

