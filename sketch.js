function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("green");
  text("Kjeld van der Wiel",300,200)

  //lichaam
  rect(100,200,40,100);
  //benen
  line(100,300,60,350);
  line(140,300,180,350);
  //armen
  line(100,200,40,240);
  line(140,200,200,240);
  //gezicht && hoofd
  ellipse(120,160,80,80);
  ellipse(100,160,20,40);
  ellipse(140,160,20,40);

  //stoplicht
  rect(700,50,40,100)
  rect(700,130,20,70)

}
