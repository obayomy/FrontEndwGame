/*
Orginial animation: https://codepen.io/enxaneta/pen/yvPmLo
Kindly refer to the comments along the script for modifications.I applied those modification in order to make the script usable with the main script
*/

const rad = Math.PI / 180;
let checkDraw = true;
let colors = [
  "#6A0000",
  "#900000",
  "#902B2B",
  "#A63232",
  "#A62626",
  "#FD5039",
  "#C12F2A",
  "#FF6540",
  "#f93801"
];
const spring = 1 / 10;
const friction = 0.85;

const canvasWidth = (canvasHeight = 50);
const particlesNumber = 20;
const canvasesNumber = 1;

class HTML5canvas {
  constructor(posX,posY) {
	this.checkDraw = true;
    this.particles = [];

    this.createElements(posX,posY);

	this.createParticles();
	this.explosionDraw();
  }
  createElements(x,y) {
    this.div = document.createElement("div");

    this.div.style.border = 'none';//
    this.div.style.position = 'absolute'//
    this.div.style.top = y;//
    this.div.style.left = x;//
	  this.canv = document.createElement("canvas");
    this.ctx = this.canv.getContext("2d");
    this.cw = this.canv.width = canvasWidth;
    this.ch = this.canv.height = canvasHeight;

    this.div.appendChild(this.canv);
    mainBody.appendChild(this.div);//
  }
  createParticles() {
    this.particles.length = 0;
    for (let i = 0; i < particlesNumber; i++) {
      this.particles.push(new Particle());
    }
  }
  explosionUpdate() {
    if (this.particles.length > 0) {
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].update();
        if (this.particles[i].r < 0.5) {
          this.particles.splice(i, 1);
        }
	  }
	}//
	else{
		this.checkDraw = false;
	}//
  }

  explosionDraw() {
    if (this.particles.length > 0) {
      this.ctx.clearRect(0, 0, this.cw, this.ch);
      this.ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].draw(this.ctx);
      }
	}
	}//
	Draw(){
		if (this.checkDraw) {
			this.requestId = window.requestAnimationFrame(()=>this.Draw());
		}
		this.explosionUpdate();
		this.explosionDraw();
		// Test: console.log(1);
	}//
  
}

class Particle {
  constructor() {
    this.decay = 0.95;
    this.r = randomIntFromInterval(5, 20);
    this.R = 20 - this.r;
    this.angle = Math.random() * 2 * Math.PI;
    this.center = { x: canvasWidth / 2, y: canvasHeight / 2 };
    this.pos = {};
    this.pos.x = this.center.x + this.r * Math.cos(this.angle);
    this.pos.y = this.center.y + this.r * Math.sin(this.angle);
    this.target = {};
    this.target.x = this.center.x + this.R * Math.cos(this.angle);
    this.target.y = this.center.y + this.R * Math.sin(this.angle);
    this.color = colors[~~(Math.random() * colors.length)];
    this.vel = {
      x: 0,
      y: 0
    };
    this.acc = {
      x: 0,
      y: 0
    };
  }

  update() {
    let dx = this.target.x - this.pos.x;
    let dy = this.target.y - this.pos.y;

    this.acc.x = dx * spring;
    this.acc.y = dy * spring;
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;

    this.vel.x *= friction;
    this.vel.y *= friction;

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    if (this.r > 0) this.r *= this.decay;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
function randomIntFromInterval(mn, mx) {
  return Math.floor(Math.random() * (mx - mn + 1) + mn);
}
// moved the Draw() to the canvas class as a member fucntion  (line 75-83), so it can be called upon creating instance of the class with a certain position
// Adjust the explostionupdate() to stop the recursive drawing frames by returning false value upon finishing 
//Test
// let c = new HTML5canvas('50vh','50vw');
// c.Draw();





