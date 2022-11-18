console.log("JavaScript is working!")

window.onload = function(){
    revealfirst();
}
window.onscroll = function(){
    reveal();
    
}

function reveal()
    {
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++)
        {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 100; //150normal
            if(revealtop < windowheight - revealpoint)
            {
                reveals[i].classList.add('active');
            }
            else if (reveals[i].classList.contains('reactivate'))
            {
                reveals[i].classList.remove('active');
            }
        }
    }

    function revealfirst()
    {
        var revealsfirst = document.querySelectorAll('.revealfirst');

        for(var i = 0; i < revealsfirst.length; i++)
        {
            var windowheight = window.innerHeight;
            var revealtop = revealsfirst[i].getBoundingClientRect().top;
            var revealpoint = 0; //150normal
            if(revealtop < windowheight - revealpoint)
            {
                revealsfirst[i].classList.add('active');
            }
            else if (revealsfirst[i].classList.contains('reactivate'))
            {
                revealsfirst[i].classList.remove('active');
            }
        }
    }

    new hoverEffect({
        parent: document.querySelector('.fluidimage'),
        image1: '/images/img3.png',
        image2  : '/images/img2.png',
        displacementImage: './displacement-img/4.png'
        
    })