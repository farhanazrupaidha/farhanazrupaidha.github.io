function menu ( {
    var i, li, lilinks;
    li = document.getElementsByClassName("li");
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "none";
    }
    lilinks = document.getElementsByClassName("lilinks");
    for (i = 0; i < lilinks.length; i++) {
        lilinks[i].className = lilinks[i].className.replace(" active", "");
    }
    document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " active";
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 3 seconds
}
