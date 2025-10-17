// Fix duplicate home content when clicking logo
document.addEventListener('DOMContentLoaded', function() {
    // Force page reload when clicking logo/home
    var logoLink = document.querySelector('.md-logo');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            if (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
                e.preventDefault();
                window.location.reload();
            }
        });
    }
});

