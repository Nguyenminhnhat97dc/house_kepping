import axios from "axios";
/* const API_URL = "http://localhost:8080" */
const API_URL = "https://secure-journey-86451.herokuapp.com"
export default  function callApi(endpoint, method = 'GET', body = null){
    console.log(">>>CAllAPI Body",body)
    //console.log("URL", `${API_URL}/${endpoint}`)
    try {
        return  axios({
            method: method,
            url: `${API_URL}/${endpoint}`,
            data: body,
            headers:{
                'Content-Type': 'application/json',
            }
        }).catch(err => {
            console.log(err)
        });
    } catch (err) {
        console.log(err);
    }
}