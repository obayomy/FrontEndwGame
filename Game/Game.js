var butRegister = document.getElementById('butregister')
var butGallery = document.getElementById('butgallery')
var butGame = document.getElementById('butgame')
var butAbout = document.getElementById('butabout')
var butHome = document.getElementById('buthome')
//game elements
var gameWindow = document.querySelector('#gameWindow')
var gameWindowSize = gameWindow.getBoundingClientRect();
var circleChild;
var butStart = document.querySelector('#butStart')
var butReset = document.querySelector('#butReset')
var numTime = document.querySelector('#numTime')
var numScore = document.querySelector('#numScore')
var time;
var score;
//
window.onload = function()
{
    this.alert('Kill The REDS!!')
}
//Main Events
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
//Game Events
butStart.addEventListener('click',()=>{
    
    let checkTime = false;
    score = 0;
    time = 60;
    let maxTime = setTimeout(() => {
        checkTime = true;
    }, 61000);
    var circleShow = setInterval(() => {
        if (checkTime) {
            clearInterval(circleShow)
        }
        else{
            createCircle();
        }
    }, 600);
    var circleClear;
    let delay = setTimeout(() => {
        circleClear = setInterval(() => {
            if (checkTime) {
                clearCircel(0);
                clearInterval(circleClear)
            }
            else{
            clearCircel(2);
            }
        }, 600);
    }, 2000);
    let timeInterval = setInterval(() => {
        if (checkTime) {
            clearInterval(timeInterval);
            
        } else {
            time = time-1;
            numTime.innerHTML = time;
        }
    }, 1000);
    butReset.addEventListener('click',()=>{
        clearCircel(0);
        clearInterval(circleShow);
        clearInterval(circleClear);
        clearTimeout(delay);
        clearTimeout(maxTime);
        clearInterval(timeInterval);
        time = 60;
        score=0;
        numTime.innerHTML = time;
        numScore.innerHTML = score;

    })
})

//functions
//Main functions
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

//Game functions
function createCircle()
{
    var circle = document.createElement('button');
    circle.className = 'circles';
    circle.style.backgroundColor = randomColor();
    circle.style.top = Math.floor(Math.random()*90).toString() + '%';
    circle.style.left = Math.floor(Math.random()*90).toString() + '%';
    // circle.classList.add()
    gameWindow.appendChild(circle);
    circle.addEventListener('click',(e)=>{
        if (circle.style.backgroundColor == "rgb(106, 0, 0)") {
            score +=100;
            numScore.innerHTML = score;
            var cirBound = circle.getBoundingClientRect();
            var centerX = e.clientX + (cirBound.left - cirBound.right);
            var centerY = e.clientY + (cirBound.top-cirBound.bottom);
            let c = new HTML5canvas(centerX.toString()+'px',centerY.toString()+'px');
            c.Draw();
            gameWindow.removeChild(circle);
        }
        else
        {
            score -=100;
            numScore.innerHTML = score;
            gameWindow.removeChild(circle);
        }
    })
}
function clearCircel(num)
{
    circleChild = gameWindow.children;
    for (let i=0;i<(circleChild.length-num);i++)
    {
            gameWindow.removeChild(circleChild[i])
    }
}
function randomColor()
{
    let x = Math.random()
    if (x <= 0.3) {
        return '#394545'
    } else {
        return '#6A0000'
    }
}
//test

