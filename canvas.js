// canvas parameter
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// describe snow
ctx.fillStyle = '#f00'
ctx.fillRect(0, 0, 100, 50);

// start drawing line
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = '#0f0'
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(200, 150);
// ctx.closePath(); //closed line
ctx.stroke();