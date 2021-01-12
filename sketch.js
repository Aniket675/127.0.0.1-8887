var player;

funtion preload()  {
//Here we add Images, Scurds
}

funtion setup() {
    //This runs once
    createCanvas(400,400);

    player = createsprite(200,200,10,10)
}

funtion draw() {
    //This runs again and again
    drawSprite();
}