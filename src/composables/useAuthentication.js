export const useAuthentication = () => {
	function isAuthenticated() {
		// Lógica para autenticação
		return true;
	}
	return {
		isAuthenticated,
	};
};
