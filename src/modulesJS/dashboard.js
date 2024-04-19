import { toggleClasse } from '@/utils';

const sidebarElement = document.querySelector('.dashboard-layout-sidebar');
const togglerElement = document.querySelector('.sidebar-toggler');

if (sidebarElement && togglerElement) {
	togglerElement.addEventListener('click', (event) => {
		event.preventDefault();

		toggleClasse(sidebarElement, 'opened');
	});
}
