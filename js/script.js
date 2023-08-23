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
ScrollReveal().reveal('.contact form #label_1',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_1',{delay:150, origin:'right'});
ScrollReveal().reveal('.contact form #label_2',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_2',{delay:150, origin:'right'});
ScrollReveal().reveal('.contact form #label_3',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_3',{delay:150, origin:'right'});


