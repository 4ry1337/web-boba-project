// changing time
var date = new Date()
const oc = document.getElementById("OC")
if( date.getHours()<11 || date.getHours()>22){
  oc.innerHTML = "closed"
  oc.style.color = "#F37272"
}

// category buttons
const menus = document.querySelectorAll("[data-menu-target]")
const menuContents = document.querySelectorAll("[data-menu-content]")
menus.forEach(menu => {
  menu.addEventListener("click", () => {
    menus.forEach(menu => {
      menu.classList.remove("active")
    })
    menu.classList.add("active")
    //show relevant menu
    const target = document.querySelector(menu.dataset.menuTarget)
    menuContents.forEach(menuContent => {
      menuContent.classList.remove("active")
    })
    target.classList.add("active")
  })
})

$(document).ready(function(){
  $('.slick').slick({
    lazyLoad: 'progressive',
    centerMode: true,
    centerPadding: '0px',
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [               
      {
          breakpoint: 991.98,
          settings: {
          vertical: false,
          slidesToShow: 1,
          }
      }],
  })
})