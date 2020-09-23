let img;
let img2;
let c;
let pink;
let green;
let pix;
function preload(){
    
    img = loadImage("img/perro.jpeg");
    img2 = loadImage("img/perro.jpeg");
}
function setup(){
    createCanvas(700, 700);
    background(0);
    pink = color(255,20,147);  
    green = color (152,255,152);
    image(img,0,0,700,700);
    loadPixels();
}

function draw(){
    pix = get(0,0);
    
    
    //179,92,64,255
    for (let i = 0; i <=width; i++){
        for (let j = 0; j <=width; j++){
            if(c<pix){
                set(i-i*2,j-j*2,0);
               
            }
            else if(c>=pix){
                set(i+i,j+j,pink);
            }
            c = get(i,j);
       
        }
    }
 
    updatePixels();
}