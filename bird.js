class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.gravity = 0.9;
        this.lift = -30;
        this.velocity = 0;
        this.m_x = 3;
        this.counter = 0;
    }

    move(spikes_array) {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
        if (this.x >= width - this.radius || this.x < this.radius) {
            this.m_x = -this.m_x;
            for (let q = 0; q < 5; q++) {
                y = random(size, width - size * 2);
                spikes_array[q] = new spike(x, y, size);
            }
            this.counter++;
        }
        this.x += this.m_x;   
    }

    up() {
        this.velocity += this.lift
    }

    appear() {
        noStroke();
        fill(233, 30, 99);
        circle(this.x, this.y, this.radius * 2);
    }
}