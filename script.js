const nav=document.getElementById('navbar');
const menu=document.getElementById('mobile-menu');
const navMenu=document.getElementById('nav-menu');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>30));
menu?.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');});
navMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
const wa='96897543212';
function waUrl(message='Hello iBex Oman, I would like to enquire about gym and fitness equipment.'){return `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;}
document.querySelectorAll('.js-whatsapp-link').forEach(a=>a.href=waUrl());
const form=document.getElementById('contact-form');
form?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const msg=`Hello iBex Oman, I would like to request a quotation.\n\nName: ${fd.get('name')||''}\nPhone/WhatsApp: ${fd.get('phone')||''}\nCompany: ${fd.get('company')||''}\nLooking for: ${fd.get('looking_for')||''}\n\nMessage:\n${fd.get('message')||''}`;window.open(waUrl(msg),'_blank','noopener');});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:.08});document.querySelectorAll('.category-card,.why-card,.project-card,.product-card').forEach(el=>observer.observe(el));
