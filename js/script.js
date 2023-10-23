
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
ScrollReveal().reveal('.contact form #label_1',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_1',{delay:150, origin:'right'});
ScrollReveal().reveal('.contact form #label_2',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_2',{delay:150, origin:'right'});
ScrollReveal().reveal('.contact form #label_3',{delay:150, origin:'left'});
ScrollReveal().reveal('.contact form #input_3',{delay:150, origin:'right'});


// Form script

let form = document.querySelector("#form");

const url = 'https://6536e637bb226bb85dd2b80d.mockapi.io/message/messages';


form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let messages = new FormData(form);
        let nameform = messages.get("input_1");
        let emailform = messages.get("input_2");
        let messageform = messages.get("input_3");
        let new_message = {
            name:nameform,
            email:emailform,
            message:messageform
            
        }
       
        sendMessage(new_message);
        let display_message = document.querySelector(".message_sent");
        display_message.style.display = "block";
})


async function sendMessage(message){
    const options = {
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(message)
    };


    fetch(url,options).then(response =>{
        if(response.ok){

        }else{
            throw new Error('Error');
        }
    }).catch(error =>{
        console.error(error);
    })

}



//button animation



