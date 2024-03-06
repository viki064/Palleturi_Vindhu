document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const menuTitles = document.querySelectorAll('.menu-title');

    // Function to toggle visibility of menu items
    function toggleMenuItems(menuTitle) {
        let menuItem = menuTitle.nextElementSibling;
        let isOpening = true;

        while (menuItem && menuItem.classList.contains('menu-item')) {
            if(menuItem.classList.contains('hidden')) {
                menuItem.classList.remove('hidden');
            } else {
                menuItem.classList.add('hidden');
                isOpening = false;
            }
            menuItem = menuItem.nextElementSibling;
        }

        menuTitle.querySelector('.toggle-button').textContent = isOpening ? '▼' : '▲';
    }

    // Add click event listener to each menu title
    menuTitles.forEach(menuTitle => {
        menuTitle.addEventListener('click', function() {
            toggleMenuItems(this);
        });
    });

    // Add click event listener to each toggle button
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up to the menu title
            let menuTitle = this.parentElement;
            toggleMenuItems(menuTitle);
        });
    });
});
