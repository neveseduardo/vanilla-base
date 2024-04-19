import { toggleClasse } from '@/utils';

const sidebarElement = document.querySelector('.dashboard-layout-sidebar');
const contentElement = document.querySelector('.dashboard-layout-content');
const togglerElement = document.querySelector('.sidebar-toggler');


if (sidebarElement && togglerElement) {
	togglerElement.addEventListener('click', (event) => {
		event.preventDefault();

		toggleClasse(sidebarElement, 'opened');
		toggleClasse(contentElement, 'opened');
	});
}
