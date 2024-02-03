import axios from "../utils/axios";

const TOKEN_KEY = "jwtToken";

const authService = {
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  getToken: () => {
    console.log(axios.defaults.headers.common.Authorization);
    const token = localStorage.getItem(TOKEN_KEY);
    if ((token != null)) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    return token;
  },

  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export default authService;
