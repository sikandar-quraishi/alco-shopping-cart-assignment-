import axios from 'axios';
// let API_URL = 'https://5adc8779b80f490014fb883a.mockapi.io';
//    export default function callApi(endpoint, method = 'GET', body) {
//        return axios({
//            method,
//            url: `${API_URL}/${endpoint}`,
//            data: body
//        }).catch(err => {
//            console.log(err);
//        });
// }

export default axios.create({
    baseURL: "http://localhost:5000",
  });