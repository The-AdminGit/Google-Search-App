import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params= {
    key: 'AIzaSyA_tVVMdsjRKTI0Hic6OzA-JranTZRKS4E',
    cx: '343189ca9fc2740c0'
} 
export const fetchDataFromApi =async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params:{...params, ...payload}
    })
    return data;
};
