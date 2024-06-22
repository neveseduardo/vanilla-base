export function toggleClasse(elemento, classe) {
	if (elemento.classList.contains(classe)) {
		elemento.classList.remove(classe);
	} else {
		elemento.classList.add(classe);
	}
}

export function loadRealPath(path) {
	if (!window.location.pathname.startsWith('/vanilla-base/')) {
		window.location.pathname = '/vanilla-base' + path;
	}
}
