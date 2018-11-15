function LoadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            viewProducts(this);
        }
    };
    
    xhttp.open('GET', 'https://hidden-forest-30275.herokuapp.com/products', true);
    xhttp.send();
}

function viewProducts(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = '<tr><th>Product</th><th>Price</th></tr>';
    var x = xmlDoc.getElementsByTagName('products');

    for(i = 0; i < x.length; i++) {
        table += '<tr><td>' + 
        x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue +
        x[i].getElementsByTagName('price')[0].childNodes[0].nodeValue +
        '</td></tr>';
    }
    
    document.getElementById('productTable').innerHTML = table;
}