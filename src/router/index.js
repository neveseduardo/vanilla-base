import page from 'page';
import { RouteModules } from './modules';
import { useRouter } from '@/composables/useRouter';

const { loadPage, routeMiddleware } = useRouter();

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
