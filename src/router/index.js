import page from 'page';

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

export const router = () => {
	page('/login', requireGuest, () => {
		loadPage('login', 'auth');
	});

	page('/', requireAuth, () => {
		loadPage('home');
	});

	page('/contact', requireAuth, () => {
		loadPage('contact');
	});

	page('/about', requireAuth, () => {
		loadPage('about');
	});

	page('*', () => {
		loadPage('notfound');
	});

	page();
};
