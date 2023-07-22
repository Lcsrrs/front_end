function toggleMode() {
    const html = document.documentElement

    const img = document.querySelector(".profile img")

    /*
    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    */

    if (html.classList.toggle('light')) {
        img.setAttribute('src', './assets/avatar-light.png');
    } else {
        img.setAttribute('src', "./assets/foto_avatar.jpg");
    }
}