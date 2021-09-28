$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 1) {
            $(".header").addClass("sticky");
            $(".lio").addClass("sticky1");
        } else {
            $(".header").removeClass("sticky");
            $(".lio").addClass("sticky1");
        }
    });
});

// Typed animation
var typed = new Typed(".typing", {
    strings: ["FrontEnd Developer", "Freelancer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});