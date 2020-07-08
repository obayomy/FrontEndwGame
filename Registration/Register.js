var butRegister = document.getElementById('butregister')
var butGallery = document.getElementById('butgallery')
var butGame = document.getElementById('butgame')
var butAbout = document.getElementById('butabout')
var butHome = document.getElementById('butHome')
//
var inFName = document.querySelector('#fName')
var inLName = document.querySelector('#LName')
var inUsrName = document.querySelector('#txtUsrName')
var inPassword = document.querySelector('#txtPassword')
var inEmail = document.querySelector('#txtEmail')
var inPhNo = document.querySelector('#txtPhNo')
var butSubmit = document.querySelector('butSubmit')
var butReset = document.querySelector('butReset')

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

//functions
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

