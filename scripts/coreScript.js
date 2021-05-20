window.addEventListener('load',function(){
    // setTimeout(function () {
        document.querySelector('body').classList.add("loaded");
        document.querySelector('html').style.overflow = "scroll";
        document.querySelector('html').style.overflowX = "hidden";
        document.querySelector('.backtext-one').classList.add("animate-left");
        document.querySelector('.backtext-two').classList.add("animate-right");
        document.querySelector('.backtext-three').classList.add("animate-left");
        document.querySelector('.hero-title-container').classList.add("animate-main-text");
        document.querySelector('.landing-hero').classList.add("animate-main-text");
        document.querySelector('.nav-links').classList.add("animate-main-text");
    // }, 2000)
});


window.addEventListener("scroll", function(){       
  var scroll_pos = 0;
  scroll_pos = $(this).scrollTop();
      if(scroll_pos > 400) {
          $("body").addClass('color-black');
          document.querySelector('.navigation-banner').style.display = 'flex';
      } else {
          $("body").removeClass('color-black');
          document.querySelector('.navigation-banner').style.display = 'none';
      }
});

// Mobile Navigation expander
function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
}

window.addEventListener("scroll", function() {
    let pageY = window.pageYOffset;
    let windowSize = window.innerWidth;

    let backtextOne = document.querySelector(".backtext-one");
    if (windowSize > 1024) {
        backtextOne.style.marginLeft = `${pageY * -.6}px`;
    }

    let backtextTwo = document.querySelector(".backtext-two");
    if (windowSize > 1024) {
        backtextTwo.style.marginRight = `${pageY * -.6}px`;
    }

    let backtextThree = document.querySelector(".backtext-three");
    if (windowSize > 1024) {
        backtextThree.style.marginLeft = `${pageY * -.6}px`;
    }
    
    let projectsTitle = document.querySelector(".work-section-title");
    if (windowSize > 2800) {
        projectsTitle.style.marginLeft = `${1000 + pageY * -.15}px`;
    } else if (windowSize > 1024) {
        projectsTitle.style.marginLeft = `${100 + pageY * -.15}px`;
    }
})

