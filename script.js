// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            let menuItem = this.parentElement.nextElementSibling;
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

            this.textContent = isOpening ? '▼' : '▲';
        });
    });
});
