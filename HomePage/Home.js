
var butRegister = document.getElementById('butregister')
var butGallery = document.getElementById('butgallery')
var butGame = document.getElementById('butgame')
var butAbout = document.getElementById('butabout')
var butColor = document.getElementById('butColor')
//
var butBlue = document.getElementById('butBlue')
var butRed = document.getElementById('butRed')
var butCyan = document.getElementById('butCyan')
var butBrown = document.getElementById('butBrown')
var butRan = document.getElementById('butRan')
//
var secSlider = document.getElementById('secSlider')
var mainBody = document.getElementById('mainBody')
//
var welcomeArea = document.getElementById('welcomeArea')
var txtName;
var checkHover =true;
//
window.onload = function(){
    //alert("Welcome")
    txtName = prompt('Enter your name')
    let txtValue ='Welcome!'
    if (txtName !=null) {
        txtValue = 'Welcome ' + txtName + '!';
    }
    writeTxt(txtValue);
}
//Events
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
butColor.addEventListener('click',()=>{
    if (checkHover) {
        secSlider.className += ' animateSliderIn'
        checkHover = false
    } else {
        secSlider.className -= ' animateSliderIn'
        checkHover = true;

    }
})
butBlue.addEventListener('click',()=>{
    mainBody.style.backgroundColor = '#394545'
})
butRed.addEventListener('click',()=>{
    mainBody.style.backgroundColor = '#a83f33'
})
butBrown.addEventListener('click',()=>{
    mainBody.style.backgroundColor = '#9e6228'
})
butCyan.addEventListener('click',()=>{
    mainBody.style.backgroundColor = '#aab1b3'
})
butRan.addEventListener('click',()=>{
    mainBody.style.backgroundColor = getRandomColor()
})

// functions
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function writeTxt(txtValue){
    let txtWelcome = document.createElement('p')
    txtWelcome.textContent = txtValue;
    txtWelcome.className = 'txtWelcome';
    welcomeArea.appendChild(txtWelcome);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
 }
 //DateTime
 var txtTime = document.getElementById('txtTime');
 var txtDate = document.getElementById('txtDate')
 var today;
//  var date;
//  var time;
 setInterval(() => {
    today = new Date();
    txtTime.innerHTML = today.getHours().toString() + ":" + today.getMinutes().toString() + ":" + today.getSeconds().toString();
    txtDate.innerHTML = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
 }, 1000);
 
