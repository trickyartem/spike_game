let spikes_array = [];
let x = 0; // spikes
let y; // spikes
let size = 20; // spikes
let bird;
let spikes = [];

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    
    let x = 0;
    let y = 0;

    for (let o = 0; o < 41; o += 2) {
        spikes[o] = new spike(x, y, size);        
        spikes[o + 1] = new spike(x, height, -size);
        x += size;
    }
}

function draw() {
    background(0);
    
    bird.appear();
    bird.move(spikes_array);

    for (let o = 0; o < spikes.length; o++) {
        spikes[o].avarage();
        if (bird.y - bird.radius < size || bird.y + bird.radius > height - size) {
            output();
        }
    }

    for (let q = 0; q < spikes_array.length; q++) {
        bird.m_x < 0 ?  spikes_array[q].left_spikes() : spikes_array[q].right_spikes();
        if (bird.x >= width - bird.radius || bird.x <= bird.radius) {
            if (bird.y + bird.radius >= spikes_array[q].y && bird.y - bird.radius <= spikes_array[q].y + size) {
                output();
            }
        }
    }
    
}

function output() {
    alert("u lost");
}
function mousePressed() {
    bird.up();
}