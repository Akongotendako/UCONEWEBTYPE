import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        const status = error.response?.status;
        const message= error.response?.data.message || "An error occurred";

        return Promise.reject({status, message});
    }
)

export default axiosInstance;