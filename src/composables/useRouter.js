import page from 'page';
import { useAuthentication } from './useAuthentication';

export const useRouter = () => {

	const { isAuthenticated } = useAuthentication();

	function loadScripts() {
		const scripts = document.getElementById('app').querySelectorAll('script');

		for (let i = 0; i < scripts.length; i++) {
			const script = scripts[i];
			const dataMode = script.getAttribute('data-mode');

			if (dataMode === 'module') {
				const newScript = document.createElement('script');
				newScript.type = 'module';
				newScript.src = script.src;
				document.body.appendChild(newScript);
			}

			script.remove();
		}
	}

	function loadPage(pageName, layout = 'dashboard') {
		const layouts = {
			'auth': '/src/layouts/authentication.html',
			'dashboard': '/src/layouts/dashboard.html',
		};

		fetch(layouts[layout])
			.then(response => {
				if (!response.ok) {
					throw new Error('Erro ao carregar o layout');
				}
				return response.text();
			})
			.then(layoutHtml => {
				fetch(`/src/pages/${pageName}.html`)
					.then(response => {
						if (!response.ok) {
							throw new Error('Erro ao carregar o conteúdo da página');
						}
						return response.text();
					})
					.then(async (contentHtml) => {
						const fullHtml = layoutHtml.replace('{{{body}}}', contentHtml);
						document.getElementById('app').innerHTML = fullHtml;

						loadScripts();
					})
					.catch(error => {
						console.error(error);
						document.getElementById('app').innerHTML = 'Erro ao carregar a página';
					});
			})
			.catch(error => {
				console.error(error);
				document.getElementById('app').innerHTML = 'Erro ao carregar o layout';
			});
	}

	function routeMiddleware(name = 'guest') {
		function requireAuth(ctx, next) {
			if (!isAuthenticated()) {
				page.redirect('/login');
			} else {
				next();
			}
		}
		function requireGuest(ctx, next) {
			if (isAuthenticated()) {
				page.redirect('/');
			} else {
				next();
			}
		}

		if (name === 'auth') {
			return requireAuth;
		}

		if (name === 'guest') {
			return requireGuest;
		}

		return undefined;
	}

	return {
		loadPage,
		routeMiddleware,
	};
};
