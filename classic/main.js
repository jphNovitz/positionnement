document.addEventListener('DOMContentLoaded', function () {
    console.log("Le document est prêt !");
    if (window.innerWidth) {
        const menu = document.getElementById('menu')
        const nav = document.getElementsByTagName('nav')[0]

        menu.addEventListener('click', function () {
            nav.classList.toggle('show')
        })
    }
});