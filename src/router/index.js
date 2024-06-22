import page from 'page';
import { RouteModules } from './modules/index.js';
import { useRouter } from '@/hooks/useRouter.js';
import { loadRealPath } from '@/utils/index.js';

const { loadPage, routeMiddleware} = useRouter();

export function navigateToRoute(event, route, options = {}) {
    event.preventDefault();
    page(route, options);
}

window.navigateToRoute = navigateToRoute;

export const router = async () => {
    RouteModules.forEach(route => {
        page(route.path, routeMiddleware(route.permission), async () => {
            await loadPage(route.moduleHTML, route.moduleJS, route.layout);
        });
    });

    page('*', async () => {
        await loadPage(loadRealPath("/src/pages/notfound/index.html"), loadRealPath("/src/pages/notfound/index.js"));
    });

    await page.start();
};