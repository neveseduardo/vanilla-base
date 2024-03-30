import axios from 'axios';

const http = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL ?? '/',
});

http.interceptors.request.use((config) => {

	if (config.headers['Content-Type'] !== 'multipart/form-data') {
		config.headers['Content-Type'] = 'application/json';
		config.headers['Accept'] = 'application/json';
	}

	return config;
});

http.interceptors.response.use(undefined, (error) => {
	return Promise.reject(error);
});

export default http;
