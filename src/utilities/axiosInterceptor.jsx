import axios from "axios";

// Instance Axios
const api = axios.create({
  baseURL: "https://demoapps.online/api", // Ganti dengan URL backend Anda
});

// Interceptor untuk menangani error
api.interceptors.response.use(
  (response) => response, // Jika berhasil, lanjutkan
  (error) => {
    if (error.response && error.response.status === 401) {
      // console.log(error);
      localStorage.removeItem("token"); // Hapus token
      window.location.href = "/login"; // Redirect ke login
    }
    // Jangan tampilkan stack trace di konsol
    return Promise.reject({ handled: true });
  }
);

export default api;
