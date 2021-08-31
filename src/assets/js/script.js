const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// mapping DOM
const menu = $('#menu-bars');
const header = $('header');
const navbar = $('.navbar');
const searchIcon = $('#search-icon');
const searchForm = $('#search-form');
const searchExit = $('#search-exit');
const scrollToTop = $('.scroll-to-top');
const navbarItem = $$('.navbar a');
const section = $$('section');
const navLinks = $$('header .navbar a');

const app = {
    start: ()=>{   

        /* scroll to top btn */
        scrollToTop.addEventListener('click', ()=>{
            window.scrollTo(0,0);
        })

        /* display heading onscroll & scroll to top btn */
        document.onscroll = function(){
           let headerHeight = header.offsetHeight;

        //    /* display header */
        //    if(window.scrollY >= headerHeight){
        //     header.style.position = 'fixed';
        //    }
        //    if(window.scrollY === 0){
        //     header.style.position = 'relative';
        //    }

           /* display scroll-to-top btn */
           if(window.scrollY >= headerHeight){
            scrollToTop.classList.add('active');
           }
           if(window.scrollY < 100){
            scrollToTop.classList.remove('active');
           }
        }

  
        /* Click to dropdown menu navbar */
        menu.addEventListener('click',(e)=>{
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active')
        })

        /* Remove dropdown navbar menu while scroll*/
        window.onscroll = ()=>{
            menu.classList.remove('fa-times');
            navbar.classList.remove('active')

            section.forEach(sec => {
                if(sec.getAttribute('id') == 'home'){
                    console.log('123')
                    let top = window.scrollY;
                    let height = sec.offsetHeight + 365;
                    let offset = sec.offsetTop;
                    let id = sec.getAttribute('id');

                    if(top >= offset && top < (offset + height)){
                        navLinks.forEach(link =>{
                            link.classList.remove('active');
                            $('header .navbar a[href='+id+']').classList.add('active');
                        })
                    };
                    
                }else{
                    let top = window.scrollY;
                    let height = sec.offsetHeight;
                    let offset = sec.offsetTop - header.offsetHeight;
                    let id = sec.getAttribute('id');
    
                    if(top >= offset && top < offset + height){
                        navLinks.forEach(link =>{
                            link.classList.remove('active');
                            $('header .navbar a[href='+id+']').classList.add('active');
                        })
                    }
                }

            });
        }

        /* Display searchForm */
        searchIcon.addEventListener('click', (e)=>{
            searchIcon.classList.add('active');
            searchForm.classList.toggle('active');
        })
        searchExit.addEventListener('click', (e)=>{
            searchIcon.classList.remove('active');
            searchForm.classList.toggle('active');
        })

        /* navigate to section (click to navbar) */
        navbarItem.forEach((e)=>{
            e.addEventListener('click', (target)=>{
                target.preventDefault();
                let sectionTarget = $(`#${e.getAttribute('href')}`);
                let offSetTopTarget = sectionTarget.offsetTop - header.offsetHeight;
                window.scrollTo(0, offSetTopTarget)
            })
        })

        /* window  on load */
        window.onload =  ()=>{
            // if(document.scrollY === 0){

            // }
        }
    }
}

app.start();

/* Slider home*/
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

/* Slider review */
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: true,
    },
    loop: true,
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        764:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }
  });

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }