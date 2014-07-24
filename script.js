	var canvas=document.getElementById("myCanvas");
	var ctx=canvas.getContext('2d');
	x=200;y=200;
	m=Math.round(Math.random()*19)*20;
	n=Math.round(Math.random()*19)*20;
	direction=1;
	bodyX=[];
	bodyY=[];
	bodyY.push(x);
	bodyY.push(y);

	ctx.fillStyle='#00ff00';
	ctx.fillRect(x,y,20,20);

	function draw(){
		ctx.fillStyle='#00ff00';
		ctx.fillRect(x,y,20,20);
	}

//方向键盘事件

$(document).keyup(function(e){	
	switch(e.keyCode){
		case 37: direction=1;
		break;
		case 38: direction=2;
		break;
		case 39: direction=3;
		break;
		case 40: direction=4;
		break;
	}
});

function move(){
	ctx.clearRect(bodyX.shift(),bodyY.shift(),20,20);
	switch(direction){
		case 1: x-=20;
		break;
		case 2: y-=20;
		break;
		case 3: x+=20;
		break;
		case 4: y+=20;
		break;
	}
	if(x==m&&y==n){
		target();
		bodyX.push(x);
		bodyY.push(y);
	}
	bodyX.push(x);
	bodyY.push(y);
	draw();
	if(x<0||x>390||y<0||y>390){
		alert("Game over!!");
		x=200,y=200;
	}
}

function target(){
	ctx.clearRect(m,n,20,20);
	m=Math.round(Math.random()*19)*20;
	n=Math.round(Math.random()*19)*20;
	ctx.fillStyle="#ff0000";
	ctx.fillRect(m,n,20,20);
}

target();

var timer=setInterval("move()",100);