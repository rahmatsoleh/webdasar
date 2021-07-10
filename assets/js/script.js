// Melakukakan navigasi yang sedang aktif

let tinggiLayar = window.innerHeight;
const articles = document.querySelectorAll('.isi');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let result = '';

    articles.forEach(article => {
        const articleTop = article.offsetTop;
        const articleHeight = article.clientHeight;

        if (window.pageYOffset >= (articleTop - articleHeight / 4)) {
            result = article.getAttribute('data-scroll');
        }

    });
    
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(result)) {
            li.classList.add('active');
        }
    })
})


// Tombol Contact
const pesan = document.querySelector('.kirim');
const cancel = document.querySelector('.cancel');
const modal = document.querySelector('.message');

pesan.addEventListener('click', function () {
    modal.classList.remove('d-none');
});

cancel.addEventListener('click', function () {
    modal.classList.add('d-none');
})