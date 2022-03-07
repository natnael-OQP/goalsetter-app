import axios from "axios";
const API_URL = "http://localhost:8000/api/users/";

// register user
const register = async (userData) => {
	const { data } = await axios.post(API_URL, userData);
	if (data) {
		localStorage.setItem("user", JSON.stringify(data));
	}
};
// Login user
const login = async (userData) => {
	const response = await axios.post(API_URL + "login", userData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}

	return response.data;
};

// Logout user
const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	login,
	logout,
};

export default authService;