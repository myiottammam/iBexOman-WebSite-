const header=document.getElementById('header');
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const reveals=document.querySelectorAll('.reveal');

const onScroll=()=>header.classList.toggle('scrolled',window.scrollY>30);
window.addEventListener('scroll',onScroll,{passive:true});onScroll();

menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));

if('IntersectionObserver' in window){
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});
 reveals.forEach(el=>io.observe(el));
}else reveals.forEach(el=>el.classList.add('is-visible'));

// Smooth anchor fallback for browsers that ignore CSS scrolling.
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{
 const id=link.getAttribute('href'); if(id&&id.length>1){const target=document.querySelector(id);if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}}
}));
