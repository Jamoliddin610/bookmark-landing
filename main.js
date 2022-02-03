let elMenuBox = document.getElementById('menubox');
let elopenMenuBox = document.getElementById('openMenubox');
let elcloseMenuBox = document.getElementById('closeMenubox');
let ellogo = document.getElementById('logo')

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

