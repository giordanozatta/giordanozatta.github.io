
$('.link').click(function(){
    console.log('you clicked');
    window.location.assign('selected.html')
})

$('.link2').click(function(){
    console.log('you click');
    window.location.assign('contact.html')
})

$(function() {
    $('body').removeClass('fade-out');
});