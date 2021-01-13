function setPage(page) {
    for (var i = 0; i <= 3; i++) {
        document.getElementById('page' + i).setAttribute('style', page === i ? 'display:block' : 'display:none')
        document.getElementById('li' + i).setAttribute('class', page === i ? 'nav-item active' : 'nav-item')
    }
}

function showItemModal(itemName) {
    $('#modalItem').modal('show')
    $('#modalTitle').html('...')
    $('#modalBody').html('Loading...')
    var metadataRequest = new XMLHttpRequest()
    metadataRequest.onreadystatechange = function () {
        if (this.readyState == 4) {
            switch (this.status) {
            case 200:
                const item = JSON.parse(this.responseText)
                $('#modalTitle').html(item.title)
                break
            }
        } 
    }
    metadataRequest.open('GET', 'items/' + itemName + '.json', true)
    metadataRequest.send()
    var bodyRequest = new XMLHttpRequest()
    bodyRequest.onreadystatechange = function () {
        if (this.readyState == 4) {
            switch (this.status) {
            case 200:
                $('#modalBody').html(this.responseText)
                break
            }
        } 
    }
    bodyRequest.open('GET', 'items/' + itemName + '.html', true)
    bodyRequest.send()
}
