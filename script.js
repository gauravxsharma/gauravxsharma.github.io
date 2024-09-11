let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

function showMore() {
    var moreText = document.getElementById("moreText");
    var readMoreBtn = document.getElementById("readMoreBtn");

    moreText.style.display = "inline";
    readMoreBtn.style.display = "none";
}
