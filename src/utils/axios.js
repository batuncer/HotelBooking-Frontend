import axios from "axios";
// config
const HOST_API_KEY =
  "http://ec2-18-236-176-123.us-west-2.compute.amazonaws.com:8080/";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API_KEY });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
