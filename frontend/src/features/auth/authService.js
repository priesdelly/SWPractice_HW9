import axios from "axios";

const API_URL = "http://localhost:5001/api/v1/auth";

//Register user
const register = async (userData) => {
  const url = API_URL + "/register";
  console.log("call uri: ", url);

  const response = await axios.post(url, userData);
  if (response.data) {
    localStorage.setItem("user", response.data.name);

  }
  console.log(response.data);
  return response.data.name;
};

//Login user
const login = async (userData) => {
  const url = API_URL + "/login";
  console.log("call uri: ", url);

  const response = await axios.post(url, userData);
  if (response.data) {
    localStorage.setItem("user", response.data.name);
  }
  console.log(response.data);
  return response.data;
};

const logout = () => {
  // localStorage.setItem('user', null);
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login
};

export default authService;