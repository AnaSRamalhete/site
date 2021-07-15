// -------------
// Function to show navigation links when the screen is smaller
// -------------
const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav_linkS');
    const navlinks = document.querySelectorAll('.navbar_link');

    // Toggle Nav
    burguer.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        //Animate Links
        navlinks.forEach((link,index) =>{
            console.log(index); // to show in console the result of index
            if (link.style.animation){
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4  + 0.6}s`

            }

        });
    });  
}

const app = ()=>{
    navSlide();
}

app();


// -----------------------------------------
// ---- Initial Animations -----------------
// -----------------------------------------

const profilePic = document.querySelectorAll('.profile-pic');
const mainContainer = document.querySelector('.main-section-container');
const mainContainerText = document.querySelector('.main-section-container-text');

const tl = new gsap.timeline();

tl.fromTo(profilePic, 1, {x:"-100%",opacity:0}, {x:"0%",opacity:1, ease:Power2.easeInOut});
tl.from(mainContainer, 0.8, {opacity:0, scale:0, ease:"in"}, "-=0.5");
//tl.fromTo(mainContainer, 1, {x:"-100%",opacity:0}, {x:"0%",opacity:1, ease:Power2.easeInOut});



// ----------------------------------------
// ---- Hoover Animations -----------------
// ----------------------------------------

mainContainer.addEventListener("mousemove", (e) => {
    let xRotation = (e.pageX - window.innerWidth/2)/4;
    let yRotation = (e.pageY - window.innerHeight/2)/6;

    transform = `translateX(${xRotation}px) translateY(${yRotation}px)`
    mainContainerText.style.trasform = transform;
    mainContainerText.style.webkitTransform = transform;
    mainContainerText.style.msTransform = transform;
});
// Animate out
mainContainer.addEventListener("mouseleave", (e)=>{
    transform = `revert`
    mainContainerText.style.trasform = transform;
    mainContainerText.style.webkitTransform = transform;
    mainContainerText.style.msTransform = transform;
    mainContainerText.style.transition = 'all 0.5s ease';
});
// Animate in
mainContainer.addEventListener("mouseenter", (e)=>{
    mainContainerText.style.transition = 'all 0.5s ease';
});

