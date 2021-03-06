import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  console.log("THis is token", token);

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: "https://webft-46-african-marketplace.herokuapp.com",
  });
};

//still need to know how to set up token and fill in baseURL
