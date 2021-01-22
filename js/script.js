let number = document.getElementById('number')
let number2 = document.getElementById('number2')
let number3 = document.getElementById('number3')
let number4 = document.getElementById('number4')

function printNumbers(from, to, element, time) {
  let current = from;
  let timerId = setInterval(function() {
    element.textContent = current;
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 2000/time);
}



let burger = document.getElementById('burger'),
  wrapper = document.getElementById('wrapper')
  menu__body = document.getElementById('menu');
  burger.addEventListener('click', function AddClass() {
  burger.classList.toggle('active')
  document.body.classList.toggle('active')
  menu.classList.toggle('active')
} 
)
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 992.98) {
	
} else {
	document.querySelectorAll('.menu__list li a').forEach(function(item) {
  item.addEventListener('click', function remove() {
    burger.classList.remove('active')
    menu.classList.remove('active')
    document.body.classList.remove('active')
  } )
});
}
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('.menu__body ul li a');
  let fromTop = window.scrollY + 220;
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
    
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});


ScrollReveal().reveal('.gall__item',{
  distance: '60%',
  origin: 'bottom',
  opacity: 0,
  duration: 1600,
  delay: 100
});
  ScrollReveal().reveal('.pricing-cards__item',{
    distance: '60%',
    origin: 'bottom',
    opacity: 0,
    duration: 1600,
    delay: 100
  });

ScrollReveal().reveal('.main-screen__text',{
  distance: '50%',
  origin: 'bottom',
  opacity: null,duration: 1600,
});
ScrollReveal().reveal('.about__cards',{
  distance: '50%',
  origin: 'bottom',
  opacity: 0,
  delay: 300
});

ScrollReveal().reveal('.image-left',{
  distance: '50%',
  origin: 'bottom',
  opacity: 0,
  duration: 1600,
  delay: 300
});
ScrollReveal().reveal('.image-right',{
  distance: '50%',
  origin: 'bottom',
  opacity: 0,
  duration: 1600,
  delay: 300
});
ScrollReveal().reveal('.gall-rovel',{
  distance: '20%',
  origin: 'bottom',
  opacity: 0,
  duration: 900,
  delay: 100
});
ScrollReveal().reveal('.gall-rovel2',{
  distance: '20%',
  origin: 'bottom',
  opacity: 0,
  duration: 900,
  delay: 130
});
ScrollReveal().reveal('.gall-rovel3',{
  distance: '20%',
  origin: 'bottom',
  opacity: 0,
  duration: 900,
  delay: 160
});
ScrollReveal().reveal('.gall-rovel4',{
  distance: '20%',
  origin: 'bottom',
  opacity: 0,
  duration: 900,
  delay: 190
});
ScrollReveal().reveal('.gall-rovel5',{
  distance: '20%',
  origin: 'bottom',
  opacity: 0,
  duration: 900,
  delay: 220
});
ScrollReveal().reveal('.gall-rovel6',{
  distance: '20%',
  origin: 'bottom',
  opacity: 0,
  duration: 900,
  delay: 250
});
ScrollReveal().reveal('.main__text',{
  distance: '50%',
  origin: 'bottom',
  opacity: 0,
  duration: 1600,
  delay: 300
});
ScrollReveal().reveal('.form',{
  distance: '50%',
  origin: 'bottom',
  opacity: 0,
  duration: 1600,
  delay: 300
});

ScrollReveal().reveal('.soc-media__items',{
  distance: '50%',
  origin: 'top',
  opacity: 0,
  duration: 1600,
  delay: 300
});


function reval() {
  ScrollReveal().reveal('.clients__items',{
    distance: '50%',
    origin: 'bottom',
    opacity: 0,
    duration: 1600,
    delay: 300
  });
  printNumbers(1, 142, number, 142);
  printNumbers(1, 63, number2, 63);
  printNumbers(1, 18, number3, 18);
  printNumbers(1, 27, number4, 27);
}
window.onload = function () {
  document.body.classList.add('loaded');
}
reval() 
