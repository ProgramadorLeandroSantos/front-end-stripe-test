import axios from "axios";

export default axios.create({
    baseURL:"https://stripe-teste-api.herokuapp.com",
    headers:{
        "Content-Type" : "application/json"
    }
})