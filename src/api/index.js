import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
