import axios from 'axios';

const instance = axios.create({
    baseURL: ""
})

/*
axios.get("https://newsapi.org/v2/top-headlines?country=br&apiKey=e50a62607b22420eac75f35ccc595bcc").then(function (response) {
    //console.log(response.data);
    //console.log(response.status);
    //console.log(response.statusText);
    //console.log(response.headers);
    //console.log(response.config);
    const array[]

 

    
  });

  export default axios.get;
*/

export default instance;
