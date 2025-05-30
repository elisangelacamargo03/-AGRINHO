let trator;
let fruta;
let cidade;
let pontos = 0; 
    
function setup() {
  createCanvas(400, 400);
  trator ={  
    x: 50 ,
    y:50 ,
    largura :50 ,
    altura :50
};
  fruta ={   
    x:random(width - 20),
    y:random (height - 20)
  };
  cidade = {   
    x:width -100,
    y:height / 2
};
}

function draw() {
  background(220);
  fill(0,255,0);
  rect(trator.x,trator.y,trator.largura,trator.altura);
  fill(255,0,0);
  rect(fruta.x,cidade .y, 100, 50);
  fill(0);
  textSize(24);
  text("Pontos:   " + pontos ,10,30);
  if (trator.x + trator.largura > fruta . x && trator.< fruta . x +20 && trator.y + trator.altura>fruta.y && trator . y < fruta . y +20) {  pontos ++;
  fruta . x =random(width - 20) ;
  fruta . y =random(height- 20);
  }
  if (trator . x + trator. largura > cidade. x && trator . x < cidade) . x 