function bodyScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").classList.add('attachTop');
    } else {
        document.getElementById("nav").classList.remove('attachTop');
    }
}

window.onscroll = function() {
    bodyScroll()
};
