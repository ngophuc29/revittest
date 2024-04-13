import axios from "axios";

async function getAccesstoken(){
    return axios.get('https://66195da2125e9bb9f299cf4f.mockapi.io/token/apirevit')
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        console.log(err);
    })
};

const Client = {getAccesstoken};
export default Client;