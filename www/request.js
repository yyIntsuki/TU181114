function loadList() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = 
    function() {
        if (this.readyState == 4 && this.status == 200) {
            var listItem = JSON.parse(this.responseText);
            GetList(listItem);
       }
    };

    xhttp.open('GET', 'https://hidden-forest-30275.herokuapp.com/products', true);
    xhttp.send();

    function GetList(item) {
        var print = '';
        var i;
        for (i = 0; i < item.length; i++) {
            print += '<option value"' + item[i]._id + '">' + item[i].name + '</option>';
        }

        document.getElementById('dd-list').innerHTML += print;
    }
};
loadList();

function showProduct(id) {
    var xhttp;
    if (id == '') {
        document.getElementById('productInfo').innerHTML = '';
        return;
    }

    xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = 
    function() {
        if (this.readyState == 4 && this.status == 200) {
            var prodInfo = JSON.parse(this.responseText);
            document.getElementById('productInfo').innerHTML =
            '<table>' + 
            '<tr><th>Product</th><td>' + prodInfo.name + '</td></tr>' +
            '<tr><th>Price</th><td>' + prodInfo.price + '</td></tr>' +
            '</table>';
        }
    };
    
    xhttp.open('GET', 'https://hidden-forest-30275.herokuapp.com/products' + id, true);
    xhttp.send();
}
