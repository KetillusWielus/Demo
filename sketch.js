function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("220");
  strokeWeight(0);
  fill("black");
  text('1 Kjeld van der Wiel',25,25);

  //stoplicht
  strokeWeight(0);
  text("6",700,160);
  fill("grey");
  rect(700,50,40,100,5);
  rect(710,150,20,70,5);

  //licht
  fill("red");
  circle(720,70,20);

  fill("orange");
  circle(720,100,20);

  fill("green");
  circle(720,130,20);

  //vlag
  strokeWeight(0);
  fill("black");
  text("2",25,40);
  fill("red");
  rect(25,50,200,33);

  fill("white");
  rect(25,80,200,33);

  fill("blue");
  rect(25,110,200,33);

  //boter kaas en eieren
  fill("black");
  strokeWeight(0);
  text("3",10,400);
  stroke("black");
  strokeWeight(2);

  fill("white");
  square(25,400,75);

  fill("black");
  square(25,400,25);
  square(25,450,25);
  square(75,400,25);
  square(75,450,25);
  square(50,425,25);

  //huisje
  strokeWeight(0);
  text("4",10,350);
  stroke("black");
  strokeWeight(3);

  fill("white"); // normaal 255,0,1
  square(25,300,50);
  triangle(25,300,75,300,50,275); 

  //dobbelsteen
  fill("black");
  strokeWeight(0);
  text("5",25,625);
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
  stroke("white");
  strokeWeight(0);
  fill("black")
  text(' 7 mario, indentiteit gestolen door doopliss',450,85 );

  // mario's pet
  stroke("white");
  strokeWeight(0);
  fill('purple');
  rect(340,35,90,10);
  rect(350,25,50,10);

  //gezicht && hoofd
  rect(340,45,70,50);
  rect(330,55,10,30);
  
  //lichaam
  rect(330,95,130,80);
  square(400,55,30);
  
  //pixels weghalen
  fill("white");
  square(330,85,20);
  square(330,105,10);
  square(330,155,10);
  square(450,125,10);
  square(450,95,10);
  square(330,45,10);
  square(420,75,10);
  square(420,55,10);

  rect(330,165,20,10);
  rect(410,125,40,20);
  rect(400,45,20,10);

  //shadoo
  fill ("black");
  stroke("white");
  strokeWeight(0);
  text('8 shadoo',450,285);

  fill('black');
  rect(340,235,90,10);
  rect(350,225,50,10);

  //gezicht && hoofd
  rect(340,245,70,50);
  rect(330,255,10,30);
  
  //lichaam
  rect(330,295,130,80);
  square(400,255,30);
  
   
  //pixels weghalen
  fill("white");
  square(330,285,20);
  square(330,305,10);
  square(330,355,10);
  square(450,325,10);
  square(450,295,10);
  square(330,245,10);
  square(420,275,10);
  square(420,255,10);

  rect(330,365,20,10);
  rect(410,325,40,20);
  rect(400,245,20,10);

}
