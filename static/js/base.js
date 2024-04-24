// Change Active Class

document.addEventListener("DOMContentLoaded", () => {
    var current = location.pathname;
    var navitem = document.querySelectorAll('.sidebar li a');

    navitem.forEach(e => {
        var currentlink = e.getAttribute("href");
        if (currentlink === current) {
            e.classList.add('active')
            if (currentlink.includes('dashboard')) {
                var dashboard = document.getElementById('dashboard');
                dashboard.classList.add('active')
            }
            if (currentlink.includes('images')) {
                var images = document.getElementById('images');
                images.classList.add('active')
            }
            if (currentlink.includes('user')) {
                var user = document.getElementById('user');
                user.classList.add('active')
            }
        }
        else {
            e.classList.remove('active')
        }
    });
});