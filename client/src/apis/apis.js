import axios from "axios";

const host = "http://localhost:3100";

const registerUser = (params) => {
  return axios.post(`${host}`, params);
};

export { registerUser };
