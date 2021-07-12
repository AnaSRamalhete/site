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
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4  + 1.2}s`

            }

        });
    });

    
}


const app = ()=>{
    navSlide();
}

app();