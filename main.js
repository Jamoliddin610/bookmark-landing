let elMenuBox = document.getElementById('menubox');
let elopenMenuBox = document.getElementById('openMenubox');
let elcloseMenuBox = document.getElementById('closeMenubox');
let ellogo = document.getElementById('logo')
let elfaqmodalopen = document.getElementById('faqModal');
let elfaqmodal = document.getElementById('faqModalbox');
let elfaqIcon = document.getElementById('faqIcon');
let elfaqmodalopenfirst = document.getElementById('faqModalfirst');
let elfaqmodalfirst = document.getElementById('faqModalboxfirst');
let elfaqIconfirst = document.getElementById('faqIconfirst');
let elfaqmodalopensecond = document.getElementById('faqModalsecond');
let elfaqmodalsecond = document.getElementById('faqModalboxsecond');
let elfaqIconsecond = document.getElementById('faqIconsecond');
let elfaqmodalopenthird = document.getElementById('faqModalthird');
let elfaqmodalthird = document.getElementById('faqModalboxthird');
let elfaqIconthird = document.getElementById('faqIconthird');

elopenMenuBox.addEventListener('click',function(){
    elMenuBox.classList.add('show');
    elopenMenuBox.classList.add('hidebtn')
    ellogo.classList.add('hidelogo')
})
elcloseMenuBox.addEventListener('click',function(){
    elMenuBox.classList.remove('show');
    elopenMenuBox.classList.remove('hidebtn')
    ellogo.classList.remove('hidelogo')
})

elfaqmodalopen.addEventListener('click',function(){
    elfaqmodal.classList.toggle('faq-show');
    elfaqIcon.classList.toggle('rotaticon')
})
elfaqmodalopenfirst.addEventListener('click',function(){
    elfaqmodalfirst.classList.toggle('faq-show');
    elfaqIconfirst.classList.toggle('rotaticon')
})
elfaqmodalopensecond.addEventListener('click',function(){
    elfaqmodalsecond.classList.toggle('faq-show');
    elfaqIconsecond.classList.toggle('rotaticon')
})
elfaqmodalopenthird.addEventListener('click',function(){
    elfaqmodalthird.classList.toggle('faq-show');
    elfaqIconthird.classList.toggle('rotaticon')
})