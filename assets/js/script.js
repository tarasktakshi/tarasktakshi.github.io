/* ---------------------------------------navigation----------------------------------------------- */
var toggleBtn = document.getElementById('menu-icon');
var navBar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', function(){
    if (!navBar.classList.contains('nav-active')) {
        toggleBtn.classList.remove('fa-bars');
        toggleBtn.classList.add('fa-xmark');
        navBar.classList.add('nav-active');
    }else{
        toggleBtn.classList.add('fa-bars');
        toggleBtn.classList.remove('fa-xmark');
        navBar.classList.remove('nav-active');
    }
})

/* -----------------------------------navigation tracker------------------------------------------- */
var section = document.querySelectorAll('section');
var navLink = document.querySelectorAll('header nav a');

window.addEventListener("scroll", function () {
   section.forEach(function(sec){
        let top = scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
   });
   /* --------------------------------navigtion feel---------------------------------- */
   toggleBtn.classList.remove('fa-xmark');
   toggleBtn.classList.add('fa-bars');
   navBar.classList.remove('nav-active');

}, false);
/*---------------------------Scroll reveal---------------------------------*/
ScrollReveal({
    reset: true,
    distance: '80px',
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-image, .services-container, .protfolio-box, .contact form', {origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content p', {origin:'right'});
// --------------------hover project-------------------------
var projects = document.querySelectorAll('.portfolio-box');
var projectLayer = document.querySelectorAll('.portfolio-layer');

projects.forEach(function(projects){

    projects.addEventListener('mouseover', function(){
        projectLayer.forEach(function(project){
            project.style.transform = "translateY(0%)";
        });
    })
    projects.addEventListener('mouseout', function(){
        projectLayer.forEach(function(project){
            project.style.transform = "translateY(100%)";
        });
    })

})