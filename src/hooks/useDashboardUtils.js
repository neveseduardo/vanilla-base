export const useDashboardUtils = () => {
	function startSidebarMenuState() {
		const sidebarElement = document.querySelector('.dashboard-layout-sidebar');
        const contentElement = document.querySelector('.dashboard-layout-content');
        const togglerElement = document.querySelector('.sidebar-toggler');

        if (sidebarElement && togglerElement) {
            togglerElement.addEventListener('click', (event) => {
                event.preventDefault();

                sidebarElement.classList.toggle('opened');
                contentElement.classList.toggle('opened');

                const sidebarState = sidebarElement.classList.contains('opened') ? 'open' : 'closed';
                localStorage.setItem('sidebarState', sidebarState);
            });

            const savedSidebarState = localStorage.getItem('sidebarState');
            
            if (savedSidebarState === 'open') {
                sidebarElement.classList.add('opened');
                contentElement.classList.add('opened');
            }
        }
	}

	function startDropdownListState() {
		const parents = document.querySelectorAll('.dashboard-layout-sidebar-menu-parent');

        parents.forEach((parent, index) => {
            const listId = `menu-${index}`;
            let isOpen = localStorage.getItem(listId) === 'open'; 

            const toggleList = () => {
                const listNode = parent.parentNode.querySelector('.dashboard-layout-sidebar-menu-children ul');

                if (listNode) {
                    const linksNodes = listNode.querySelectorAll('li');
                    const iconNode = parent.querySelector('.dropdown-icon');
                    const totalHeight = Array.from(linksNodes).reduce((acc, el) => {
                        const height = parseFloat(window.getComputedStyle(el).height);
                        return acc + height;
                    }, 0);

                    parent.classList.toggle('opened');
                    iconNode.classList.toggle('rotate-180');

                    if (isOpen) {
                        listNode.style.maxHeight = `${totalHeight}px`;
                    } else {
                        listNode.style.maxHeight = '0';
                    }
    
                    localStorage.setItem(listId, isOpen ? 'open' : 'closed');
                }
            };

            if (isOpen) {
                toggleList();
            }

            parent.addEventListener('click', (event) => {
                event.stopImmediatePropagation();

                isOpen = !isOpen;

                toggleList();
            })
        });
	}

	function starstartDashboardModule() {
		startSidebarMenuState();
		startDropdownListState();
	}

	return {
		starstartDashboardModule,
	};
};