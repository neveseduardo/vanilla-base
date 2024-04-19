import page from 'page';
import { RouteModules } from './modules';

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
				.then(contentHtml => {
					const fullHtml = layoutHtml.replace('{{{body}}}', contentHtml);
					document.getElementById('app').innerHTML = fullHtml;
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

function isAuthenticated() {
	// Lógica para autenticação
	return true;
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

export const router = () => {
	RouteModules.forEach((_) => {
		page(_.path, routeMiddleware(_.permission), () => {
			loadPage(_.fileName, _.layout);
		});
	});

	page('*', () => {
		loadPage('notfound');
	});

	page();
};
