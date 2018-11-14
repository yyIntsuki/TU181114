var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(this.readyState == 4)
    {
        document.getElementById('body-content').innerHTML = this.responseText;
    }
};

xhr.open('GET', '/products');
xhr.send();