$(document).ready(function(){
    
    $("#hero-slider").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        navText: [
            "<i class= 'fas fa-angle-left'><i>",
            "<i class= 'fas fa-angle-right'><i>"
        ],
        navContainer: "#hero-slider-nav",
    });


console.warn("waterboom mannn!")
});

const contentBody = document.getElementById('content-body');
const btnReadMore = document.getElementById('btn-read-more');

function gantiTextButton(){
    if(contentBody.classList.contains('expand')){
        btnReadMore.innerHTML = 'Less'
    } else {
        btnReadMore.innerHTML = 'Read More'
    }
}

btnReadMore.addEventListener("click", function(e){
    contentBody.classList.toggle("expand");
    gantiTextButton()
})