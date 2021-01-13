function setPage(page) {
    for (var i = 0; i <= 3; i++) {
        document.getElementById('page' + i).setAttribute('style', page === i ? 'display:block' : 'display:none')
        document.getElementById('li' + i).setAttribute('class', page === i ? 'nav-item active' : 'nav-item')
    }
}

function showItemModal(itemName) {
    $('#modalItem').modal('show')
    var itemRequest = new XMLHttpRequest()
    itemRequest.onreadystatechange = function () {
        if (this.readyState == 4) {
            switch (this.status) {
            case 200:
                const item = JSON.parse(this.responseText)
                $('#modalTitle').html(item.title)
                $('#modalBody').html(item.body)
                break
            }
        } 
    }
    itemRequest.open('GET', 'items/' + itemName + '.json', true)
    itemRequest.send()
}
