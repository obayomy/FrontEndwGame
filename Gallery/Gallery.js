var butRegister = document.getElementById('butregister')
var butGallery = document.getElementById('butgallery')
var butGame = document.getElementById('butgame')
var butAbout = document.getElementById('butabout')
var butHome = document.getElementById('butHome')
//
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var display = document.getElementById('display')
//events
butAbout.addEventListener('click',()=>{
    openInNewTab('https://github.com/obayomy')
})
butGame.addEventListener('click',()=>{
    openInNewTab('../Game/Game.html')
})
butRegister.addEventListener('click',()=>{
    openInNewTab('../Registration/Register.html')
})
butGallery.addEventListener('click',()=>{
    openInNewTab('../Gallery/Gallery.html')
})
butHome.addEventListener('click',()=>{
    openInNewTab('../HomePage/Home.html')
})
//
img1.addEventListener('click',()=>{
    display.className = 'img1'
})
img2.addEventListener('click',()=>{
    display.className = 'img2'
})
img3.addEventListener('click',()=>{
    display.className = 'img3'
})
img4.addEventListener('click',()=>{
    display.className = 'img4'
})
img5.addEventListener('click',()=>{
    display.className = 'img5'
})
img6.addEventListener('click',()=>{
    display.className = 'img6'
})

//functions
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

