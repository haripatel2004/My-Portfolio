
var typed = new Typed(".text", {
    strings: ["Programming," , "Full Stack Development," , "Web Development."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})



/*window.addEventListener('scroll', function() {
    var banner = document.getElementById('image');
    // Show the banner when the user scrolls down a certain amount (e.g., 200px from the top)
    if (window.scrollY > 700) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
});*/
