class spike {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    right_spikes() {
        noStroke();
        fill(225, 100, 0);
        triangle(width, this.y,
                width, this.y + this.size,
                width - size, (this.y * 2 + this.size) / 2);
    }

    left_spikes() {
        fill(225, 100, 0);
        noStroke();
        triangle(this.x, this.y,
                this.x, this.y + this.size,
                this.size, (this.y * 2 + this.size) / 2);
    }

    avarage() {
        fill(225, 100, 0);
        noStroke();
        triangle(this.x, this.y,
                this.x + this.size, this.y,
                (this.x * 2 + this.size) / 2, this.y + this.size);
    }
}