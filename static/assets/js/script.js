// Header/Nav Toggle Button
const navMenu = document.getElementById("navMenu");
const toggleBtn = document.getElementById("toggleBtn");
const homeContent = document.getElementById("home_content");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("activeMenu");
    toggleBtn.classList.toggle("activeToggle");
    homeContent.classList.toggle("contentZindex");
    body.classList.toggle("activeNavMenu");
});

 // Header Scroll  
 window.addEventListener('scroll', ()=>{
    const navbar = document.getElementById("navbar");
    if(this.scrollY >= 60){
        navbar.classList.add("acitve_nav");
    }else{
        navbar.classList.remove("acitve_nav");
    }
   }) 

 // ====== ======>> REMOVE NAVMENU ON LINK ACTION <<====== ======
 const navLink = document.querySelectorAll('.nav_link');

navLink.forEach((n) =>
n.addEventListener('click', () => {
    navMenu.classList.remove('activeMenu');
    toggleBtn.classList.remove('activeToggle');
    body.classList.remove("activeNavMenu");
})
);

 /*============== Setting Menu Show ==============*/
 const setting = document.querySelector('#setting'),
     settinBtn = document.querySelector('#settinBtn');

 settinBtn.addEventListener('click', () => {
     setting.classList.toggle('settingActive');
     // settinBtn.classList.toggle("active");    
 });  

// Theme Skin
 var lg1 = document.getElementById("lg__1");
 var lg2 = document.getElementById("lg__2");
 var lg3 = document.getElementById("lg__3");
 var lg4 = document.getElementById("lg__4");
 var lg5 = document.getElementById("lg__5");
 var lg6 = document.getElementById("lg__6");
 var body = document.querySelector("body");

 lg1.addEventListener('click',()=>{
     body.classList.add("activeLG1");
     body.classList.remove("activeLG2");
     body.classList.remove("activeLG3");
     body.classList.remove("activeLG4");
     body.classList.remove("activeLG5");
     body.classList.remove("activeLG6");
 });

 lg2.addEventListener('click',()=>{
     body.classList.remove("activeLG1");
     body.classList.add("activeLG2");
     body.classList.remove("activeLG3");
     body.classList.remove("activeLG4");
     body.classList.remove("activeLG5");
     body.classList.remove("activeLG6");
 });

 lg3.addEventListener('click',()=>{
     body.classList.remove("activeLG1");
     body.classList.remove("activeLG2");
     body.classList.add("activeLG3");
     body.classList.remove("activeLG4");
     body.classList.remove("activeLG5");
     body.classList.remove("activeLG6");
 });

 lg4.addEventListener('click',()=>{
     body.classList.remove("activeLG1");
     body.classList.remove("activeLG2");
     body.classList.remove("activeLG3");
     body.classList.add("activeLG4");
     body.classList.remove("activeLG5");
     body.classList.remove("activeLG6");
 });

 lg5.addEventListener('click',()=>{
     body.classList.remove("activeLG1");
     body.classList.remove("activeLG2");
     body.classList.remove("activeLG3");
     body.classList.remove("activeLG4");
     body.classList.add("activeLG5");
     body.classList.remove("activeLG6");
 });

 lg6.addEventListener('click',()=>{
     body.classList.remove("activeLG1");
     body.classList.remove("activeLG2");
     body.classList.remove("activeLG3");
     body.classList.remove("activeLG4");
     body.classList.remove("activeLG5");
     body.classList.add("activeLG6");
 });

  // Setting Menu Position
  var menuLeft = document.getElementById("menuLTR");
  var menuRight = document.getElementById("menuRTL");
 
  menuLeft.addEventListener("click",()=>{
      setting.classList.add("menuPostion");
  }) 
 
  menuRight.addEventListener("click",()=>{
      setting.classList.remove("menuPostion");
  }) 

 // Light/Dark Theme Version
    var checkbox = document.getElementById("bgTheme");
    checkbox.addEventListener("click",()=>{
         body.classList.toggle("activeDarkTheme");
        //  setting.style.color="#fff";
     })

// ====== ======>> Active Link on Section Scroll <<====== ======
const section = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
const scrollY = window.pageYOffset; 
    section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document
        .querySelector('.navItem a[href*=' + sectionId + ']').classList.add('active');
    } else {
    document
        .querySelector('.navItem a[href*=' + sectionId + ']').classList.remove('active');
    }
    });
});

// Scroll Up Button
window.addEventListener('scroll', ()=>{
 const scrollUp = document.getElementById("scrollUp");
 if(this.scrollY >= 120){
     scrollUp.classList.add("active_scrollup");
 }else{
     scrollUp.classList.remove("active_scrollup");
 } 
}) 

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
 pagination: {
   el: ".swiper-pagination",
   dynamicBullets: true,
 },
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 loop: true,
 autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
}); 


// ScrollReveal
const scrollRevealAnime = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 2000,
   reset: true,
})

scrollRevealAnime.reveal(
   `.titleLight,
   .titleBold,
   .proff,
   .homeText,
   .home_button, 
   .text_lg,
   .aboutText,
   .sign,
   .prgress__bar, 
   .icons_img,
   .exp_title,
   .about_card,
   .blog_card,
   .footer_brand,
   .footer_link,
   .copyright_msg,
   .btn`,
   {
       interval: 200,
   }
);













// Audo Scroll Page 
let scrollerID;
let paused = true;
let speed = 1; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed * 5;

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0, 3);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Reached end of page
            stopScroll();
        }
    }, interval);
    return id;
}

function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function (event)
{
    if (event.which == 13 || event.keyCode == 13) {
        // It's the 'Enter' key
        if(paused == true) {
            scrollerID = startScroll();
            paused = false;
        }
        else {
            stopScroll();
            paused = true;
        }
    }
}, true);