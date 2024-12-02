import { myAxios } from "./helper";

export const register=(data)=>{
    return myAxios
    .post("/api/register",data)
    .then(response => {
        console.log('Response from server:', response.data);
        return response.data; // You can handle this data as needed
      })
      .catch(error => {
        console.error('Error during registration:', error);
        throw error;
      });
}