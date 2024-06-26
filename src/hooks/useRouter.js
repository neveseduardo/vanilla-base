import page from 'page';
import { useAuthentication } from '@/hooks/useAuthentication';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { loadRealPath } from '@/utils';

export const useRouter = () => {
	const { isAuthenticated } = useAuthentication();
	const { starstartDashboardModule } = useDashboardUtils();

	function loadPage(pathHTML, pathJS, layout = null) {
		const layouts = {
			'auth': loadRealPath('/src/layouts/authentication.html'),
			'dashboard': loadRealPath('/src/layouts/dashboard.html'),
		};

		fetch(layouts[layout])
			.then(response => {
				if (!response.ok) {
					throw new Error('Erro ao carregar o layout');
				}
				return response.text();
			})
			.then(async (layoutHtml) => {
				const response = await fetch(pathHTML);
				const html = await response.text();
				const fullHtml = layoutHtml.replace('{{{body}}}', html);
				
				if (layout) {
					document.getElementById('app').innerHTML = fullHtml;
				} else {
					document.getElementById('app').innerHTML = html;
				}

				const script = document.createElement('script');
				script.src = pathJS;
				document.body.appendChild(script);

				starstartDashboardModule();
			})
			.catch(error => {
				console.error(error);
				document.getElementById('app').innerHTML = 'Erro ao carregar o layout';
			});
	}

	function routeMiddleware(name = 'guest') {
		function requireAuth(ctx, next) {
			if (!isAuthenticated()) {
				page.redirect(loadRealPath('/login'));
			} else {
				next();
			}
		}
		function requireGuest(ctx, next) {
			if (isAuthenticated()) {
				page.redirect(loadRealPath('/'));
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
