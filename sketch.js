function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("220");
  text('Kjeld van der Wiel',25,25);

  //stoplicht
  //stroke("black");
  //strokeWeight(4);

  fill("grey");
  rect(700,50,40,100,5);
  rect(710,150,20,70,5);

  //licht
  fill("red")
  circle(720,70,20);

  fill("orange")
  circle(720,100,20);

  fill("green")
  circle(720,130,20);

  //vlag
  
  fill("red");
  rect(25,50,200,33);

  fill("white");
  rect(25,80,200,33);

  fill("blue");
  rect(25,110,200,33);

  //boter kaas en eieren

  fill("white");
  square(25,400,75);

  fill("black");
  square(25,400,25);
  square(25,450,25);
  square(75,400,25);
  square(75,450,25);
  square(50,425,25);

  //huisje

  fill(250, 0.1);
  square(25,300,50);
  triangle(25,300,75,300,50,275); 

  //dobbelsteen

  fill("white");
  stroke("black");
  strokeWeight(4);
  square(25,500,100,5);

  //ogen

  fill("black")
  strokeWeight(1);
  circle(50,550,20);
  circle(100,550,20);

  // mario

  // mario's pet
  stroke("white");
  strokeWeight(0);
  fill("red");
  rect(340,35,90,10);
  rect(350,25,50,10);

  //gezicht && hoofd
  fill("yellow");
  rect(340,45,70,50);
  rect(330,55,10,30);
  
  //lichaam
  fill("red");
  rect(330,75,130,80);
  
  


  

  

  
  




}
