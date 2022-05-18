import axios from "axios";
const API_URL = "http://localhost:8080"

export default async function callApi(endpoint, method = 'GET', body){
    console.log(">>>CAllAPI Body",JSON.stringify(body))
    try {
        return await axios({
            method: method,
            url: `${API_URL}/${endpoint}`,
            data: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json'
            }
        }).catch(err => {
            console.log(err)
        });
    } catch (err) {
        console.log(err);
    }
}