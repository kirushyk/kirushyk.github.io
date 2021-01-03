function setPage(page) {
    for (var i = 0; i <= 3; i++) {
        document.getElementById('page' + i).setAttribute('style', page === i ? 'display:block' : 'display:none')
        document.getElementById('li' + i).setAttribute('class', page === i ? 'nav-item active' : 'nav-item')
    }
}
