
c = document.createElement('canvas');
c.width = 800;
c.height = 600;
c;
document.body.appendChild(c);
ctx = c.getContext('2d');
ctx.fillRect(0,0,800,600);
ctx.fillStyle = 'purple';
ctx.fillRect(20,20,200,200);
ctx.fillStyle = 'blue';
ctx.fillStyle(40,40,160,160);
ctx.fillRect(40,40,160,160);
ctx.fillStyle = 'green';
ctx.fillRect(60,60,120,120);
ctx.beginPath();
ctx.closePath();
