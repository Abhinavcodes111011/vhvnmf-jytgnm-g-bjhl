canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth = 2; 
ctx.arc(500, 300,70 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",My_mouse_down);

function My_mouse_down(e){
mouse_x=e.clientX;
mouse_y=e.clientY;
 console.log("X="+mouse_x + ",y= " mouse_y);
 circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth = 2; 
    ctx.arc(mouse_x, mouse_y,70 ,0 , 2*Math.PI);
    ctx.stroke();
    
}
