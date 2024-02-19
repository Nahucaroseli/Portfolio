document.addEventListener('DOMContentLoaded',()=>{



// title animation
let text = new SplitType('#main_title');
let characters = document.querySelectorAll('.char');

for(i = 0; i<characters.length; i++){
    characters[i].classList.add('translate_y');
}


gsap.to('.char',{
    y:0,
    stagger:0.05,
    delay:0.02,
    duration:0.5
})
});






// Navigation Tabs
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if($(window).scrollTop() > 60){
            $('.header').addClass('active');
        }
        else{
            $('.header').removeClass('active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})


// Scroll animations

ScrollReveal({
    reset:false,
    distance:'60px',
    duration:2500,
    delay:400
});

ScrollReveal().reveal('.about .row .content',{delay:200, origin:'left'});
ScrollReveal().reveal('.about .row .image',{delay:200, origin:'right'});
ScrollReveal().reveal('.skills .box-container .box', {delay:200, origin:'left'});
ScrollReveal().reveal('.projects .box-container .box', {delay:200, origin:'bottom'});
ScrollReveal().reveal('.projects .box-container .box', {scale:1.2});
ScrollReveal().reveal('.contact form #label_1',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_1',{delay:150, origin:'right'});
ScrollReveal().reveal('.contact form #label_2',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_2',{delay:150, origin:'right'});
ScrollReveal().reveal('.contact form #label_3',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_3',{delay:150, origin:'right'});








