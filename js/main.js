

$('.link').click(function(){
    console.log('you clicked');
    window.location.assign('selected.html')
})

$('.link2').click(function(){
    console.log('you clicked');
    window.location.assign('https://www.instagram.com/giordanozatta/')
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}