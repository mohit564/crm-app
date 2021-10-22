import axios from "axios";

function useAxiosInstance() {
  const SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;
  const AUTH_TOKEN = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: SERVER_URL,
    headers: { Authorization: "Bearer " + AUTH_TOKEN },
  });
  return instance;
}

export default useAxiosInstance;
