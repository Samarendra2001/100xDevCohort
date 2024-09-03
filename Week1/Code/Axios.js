// Axios API - It is a library used to make HTTP requests to the server. It is a promise-based library and developer-friendly.
// to install - npm install axios / use CDN in HTML

const axios = require('axios');
// axios.get(`https://randomuser.me/api`)
//     .then(response =>{
//         console.log(response.data);
//     })
//     .catch(error=>{
//         console.log('Error',error);
//     })
//When using Axios to make HTTP requests, the response data is already in JSON format, so there's no need to call .json() on it. The .json() method is used with the Fetch API, not Axios.
async function getdata(){

    try{
        const data = await axios.get("https://randomuser.me/api")
        console.log(data);
    }catch(err){
        console.log(err);
    }
    
}
getdata();
