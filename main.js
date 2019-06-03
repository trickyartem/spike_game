let play = false;
let spikes_array = [];
let x = 0; // spikes
let y; // spikes
let size = 20; // spikes
let bird;
let spikes = [];
let start;
let restart;
let stop = true;

function setup() {
    createCanvas(400, 600);
    
    reset();

    restart = createButton('click to restart');
    start = createButton('click to play');
    start.position(width + 8, height);
    restart.position(width + 8, height - 20);
    start.mouseClicked(() => play = true);
    restart.mouseClicked(reset, mousePressed);
    let x = 0;
    let y = 0;
    
    for (let o = 0; o < 41; o += 2) {
        spikes[o] = new spike(x, y, size);        
        spikes[o + 1] = new spike(x, height, -size);
        x += size;
    }
    textSize(50);
    textAlign(CENTER);
}

function reset() {
    bird = new Bird(width / 2, height / 2);
}

function mousePressed() {
    loop();
}

function draw() {
    
    if (play) {
        background(0);
        
        fill(212, 225, 87);
        noStroke();
        circle(width / 2, height / 2, 100);
        fill(0);
        text(bird.counter, width / 2, height / 2);
            
        bird.appear();
        bird.move(spikes_array);

        for (let o = 0; o < spikes.length; o++) {
            spikes[o].avarage();
            if (bird.y - bird.radius < size || bird.y + bird.radius > height - size) {
                output();
                noLoop();
            }
        }

        for (let q = 0; q < spikes_array.length; q++) {
            bird.m_x < 0 ?  spikes_array[q].left_spikes() : spikes_array[q].right_spikes();
            if (bird.x >= width - bird.radius || bird.x <= bird.radius) {
                if (bird.y + bird.radius >= spikes_array[q].y && bird.y - bird.radius <= spikes_array[q].y + size) {
                    output();
                    noLoop();
                }
            }
        }
    }
}

function output() {
    print("u lost");
}

function keyPressed() {
    bird.up();
}