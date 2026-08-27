const menu=document.getElementById('menu');
const links=document.getElementById('links');
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('#links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const lang=document.getElementById('lang');
let ar=false;
function setLang(){document.documentElement.lang=ar?'ar':'en';document.documentElement.dir=ar?'rtl':'ltr';lang.textContent=ar?'English':'العربية';document.querySelectorAll('[data-en]').forEach(el=>{el.innerHTML=ar?el.dataset.ar:el.dataset.en});}
lang.addEventListener('click',()=>{ar=!ar;setLang()});
document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const msg=`Hello iBex Oman, I would like to request a quotation.%0A%0AName: ${encodeURIComponent(f.get('name'))}%0APhone: ${encodeURIComponent(f.get('phone'))}%0ASpace: ${encodeURIComponent(f.get('space')||'Not specified')}%0AProject: ${encodeURIComponent(f.get('project'))}%0ARequirements: ${encodeURIComponent(f.get('message')||'Not specified')}`;window.open(`https://wa.me/96897543212?text=${msg}`,'_blank')});
