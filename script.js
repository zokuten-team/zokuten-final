const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const panel = document.querySelector('.mobilepanel');
const aboutSection = document.querySelector('#about');
const HEADER_HEIGHT = 86;

function setHeader(){
  const y = window.scrollY;

  // if #about doesn't exist, fallback to old behaviour
  const aboutTop = aboutSection ? (aboutSection.offsetTop - HEADER_HEIGHT) : Infinity;

  // After reaching About, make header orange + text white
  if(y >= aboutTop){
    header.classList.add('orange');
    header.classList.remove('scrolled');
  } else {
    header.classList.remove('orange');

    // your original "white header after small scroll" effect (optional)
    if(y > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
}

setHeader();
window.addEventListener('scroll', setHeader);

// Mobile menu
burger?.addEventListener('click', () => {
  panel?.classList.toggle('open');
});

panel?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => panel.classList.remove('open'));
});

// Smooth scroll buttons
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-scroll');
    const el = document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Contact form demo
const form = document.querySelector('#contactForm');
form?.addEventListener('submit', (e) => {})
  e.preventDefault();
  const name = form.querySelector('input[name="name"]').value.t
