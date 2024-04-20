import { toggleClasse } from '@/utils';

const sidebarElement = document.querySelector('.dashboard-layout-sidebar');
const contentElement = document.querySelector('.dashboard-layout-content');
const togglerElement = document.querySelector('.sidebar-toggler');

console.log('togg', sidebarElement, contentElement, togglerElement);

if (sidebarElement && togglerElement) {
	togglerElement.addEventListener('click', (event) => {
		event.preventDefault();

		toggleClasse(sidebarElement, 'opened');
		toggleClasse(contentElement, 'opened');
	});
}

(() => {
	const parentElement = document.querySelectorAll('.dashboard-layout-sidebar-menu-item');
	
	Array.from(parentElement).forEach((el) => {
		let isOpen = false;

		el.addEventListener('click', (event) => {
			event.stopImmediatePropagation();

			isOpen = !isOpen;

			const childrenElement = el.querySelector('.dashboard-layout-sidebar-menu-children ul');

			if (childrenElement) {
				const linkElements = el.querySelectorAll('.dashboard-layout-sidebar-menu-children ul li a');
				const arrowElement = el.querySelector('.dropdown-icon');
				const totalHeight = Array.from(linkElements).reduce((acc, el) => {
					const height = parseFloat(window.getComputedStyle(el).height);
					return acc + height;
				}, 0);
				
				el.classList.toggle('opened');
				arrowElement.classList.toggle('rotate-180');

				if (isOpen) {
					childrenElement.style.maxHeight = `${totalHeight}px`;
				} else {
					childrenElement.style.maxHeight = '0';
				}
			}
		});
	})
})();

