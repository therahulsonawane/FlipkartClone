import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
  try {
    const response = await axios.post("http://localhost:8000/signup", data);
    return response.data;
  } catch (error) {
    console.error("Error while calling signup API", error);
    throw error;
  }
};

// import axios from "axios";

// export const authenticateSignup = async (data) => {
//   try {
//     const response = await axios.post("/signup", data);
//     return response.data;
//   } catch (error) {
//     console.error("Signup API call failed", error);
//     throw error;
//   }
// };
