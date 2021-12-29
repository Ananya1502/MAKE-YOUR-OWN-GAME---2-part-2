var bgImg;
var boySprite , boyImg;
var advancedSpell, defenceSpell, hydroSpell, metalSpell, moonSpell, solarFlareSpell, windSpell;

function preload(){
  bgImg = loadImage("assets/magicforest.png");
  
  boyImg = loadAnimation(
    "boy/boyrunning-1.png",
    "boy/boyrunning-2.png",
    "boy/boyrunning-3.png",
    "boy/boyrunning-4.png",
    "boy/boyrunning-5.png",
    "boy/boyrunning-6.png",
    "boy/boyrunning-7.png",
    "boy/boyrunning-8.png",
    "boy/boyrunning-9.png",
    "boy/boyrunning-10.png",
    "boy/boyrunning-11.png",
    "boy/boyrunning-12.png",
    "boy/boyrunning-13.png",
    "boy/boyrunning-14.png",
    "boy/boyrunning-15.png",
    "boy/boyrunning-16.png",
    "boy/boyrunning-17.png",
    "boy/boyrunning-18.png");

  advancedSpell = loadImage("assets/advanced spell.png");
  defenceSpell = loadImage("assets/defencespell.png");
  hydroSpell = loadImage("assets/hydro spell.png");
  metalSpell = loadImage("assets/metalspell.png");
  moonSpell = loadImage("assets/moonspell.png") ;
  solarFlareSpell = loadImage("assets/solarflarespell.png");
  windSpell = loadImage("assets/wind.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  boySprite = createSprite(width/2-600, height/2+80, 50, 50);
  boySprite.addAnimation("running", boyImg);
  boySprite.scale = 0.8
}

function draw() {
  background(bgImg);  
  drawSprites();
}