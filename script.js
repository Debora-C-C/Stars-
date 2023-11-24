
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const starsArray = [];

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 100; i++){
        starsArray.splice(new Star());
    }   
});
canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++){
       starsArray.push(new Star());
    }
});

class Star {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 9 + 1;
        this.speedX = Math.random() * 7 - 3;
        this.speedY = Math.random() * 7 - 3;
        }
        update(){
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 10) this.size -= 0.1;
        }
        draw(){
            ctx.fillStyle = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', 250)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
}

function handleStars() {
    for (let i = 0; i < starsArray.length; i++){
        starsArray[i].update();
        starsArray[i].draw();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    requestAnimationFrame(animate);
}
animate(); 