const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}

//restoran-section
var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionIHeading');

    for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
      var itemClass = this.parentNode.className;
      for (var i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
      }
      if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
      }
    }


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
      })