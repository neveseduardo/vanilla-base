export const RouteModules = [
	{ path: '/login', fileName: 'login', layout: 'auth', permission: 'guest' },
	{ path: '/', fileName: 'home', layout: 'dashboard', permission: 'auth' },
	{ path: '/contact', fileName: 'contact', layout: 'dashboard', permission: 'auth' },
	{ path: '/about', fileName: 'about', layout: 'dashboard', permission: 'auth' },
];
