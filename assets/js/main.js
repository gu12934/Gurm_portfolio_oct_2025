document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const avatarImg = document.getElementById('avatarImg');
    if (avatarImg) {
        avatarImg.onerror = function() {
            this.src = 'https://via.placeholder.com/250/2563eb/ffffff?text=GS';
        };
    }
});
