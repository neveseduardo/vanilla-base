import http from '@/services';

const path = '/usuarios';

export const authenticationService = {
	async getAll(params = {}) {
		return http.get(path, { params });
	},
	async getByCode(id) {
		return http.get(`${path}/${id}`);
	},
	async store(data = {}) {
		return http.post(path, data);
	},
	async update(id, data = {}) {
		return http.put(`${path}/${id}`, data);
	},
	async delete(id) {
		return http.delete(`${path}/${id}`);
	},
};
