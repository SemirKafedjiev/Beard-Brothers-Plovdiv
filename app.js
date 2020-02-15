function OpenMenu() {
    document.getElementById("menu-open").style.display = "flex";
}
function CloseMenu(){
    document.getElementById("menu-open").style.display="none";
}
$(document).ready(function () {
    
    var speed = 5000;
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; 
    var next = 'next'; 
    slides.width(item_width); 
    container.parent().width(item_width);
    container.width(slides.length * item_width); 
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    
    
    
    $('#buttons a').click(function (e) {
       
        
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        
           
        return false;
        
    });
    
    function resetSlides() {
       
        container.css({
            'left': -1 * item_width
        });
    }
    
});


function rotate() {
    $('#next').click();
}