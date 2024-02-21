const showcase = document.getElementById('showcase');
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('#slider .slide');
const slide_width = document.body.clientWidth;
const slide_count = slides.length;
const next_slide = document.querySelector('.next-slide');
const prev_slide = document.querySelector('.prev-slide');
slider.style.marginRight = -slide_width + 'px';
slides.forEach(slide =>{
    slide.style.width = slide_width + 'px';
});
slider.style.width = (slide_count * slide_width) + 'px';
showcase.style.width = slide_width + 'px';

function GoToNextSlide()
{
    slider.animate({
        right: -slide_width + 'px',
    },
    {
        duration:2000,
        iterations:1,
    });

    setTimeout(()=>{
        slider.append(document.querySelector('#slider .slide:first-child'));
    },2000)
}

next_slide.addEventListener('click' , function(){
    GoToNextSlide();
    clearInterval(interval_id);
    interval_id = window.setInterval(()=>{
        GoToNextSlide();
    }, 5000);
});

function GoToPreviusSlide()
{
    slider.animate({
        right: slide_width + 'px',
    },
    {
        duration:2000,
        iterations:1,
    });

    setTimeout(()=>{
        slider.prepend(document.querySelector('#slider .slide:last-child'));
    },2000)
}

prev_slide.addEventListener('click' , function(){
    GoToPreviusSlide();
    clearInterval(interval_id);
    interval_id = window.setInterval(()=>{
        GoToNextSlide();
    }, 5000);
});

let interval_id = window.setInterval(()=>{
    GoToNextSlide();
}, 5000);
