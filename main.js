let elMenuBox = document.getElementById('menubox');
let elopenMenuBox = document.getElementById('openMenubox');
let elcloseMenuBox = document.getElementById('closeMenubox');

elopenMenuBox.addEventListener('click',function(){
    elMenuBox.classList.add('show');
})
elcloseMenuBoxMenuBox.addEventListener('click',function(){
    elMenuBox.classList.remove('show');
})

