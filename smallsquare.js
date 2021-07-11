class smallsquare {
    constructor(x, y, w, h, lighted, num) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.lighted = lighted;
        this.num = num;
    }
    sheck(a, b) {
        return a > this.x && a < this.x + this.w && b > this.y && b < this.y + this.h;

    }
    show() {
        if (this.lighted) {
            fill(255, 0, 0);
        } else {
            fill(255);
        }
        stroke(0, 0, 255);
        rect(this.x, this.y, this.w, this.h);
        fill(0, 0, 255);
        textSize(y / 2);
        text(this.num, this.x + this.w / 2 - y / 6, this.y + this.h / 2 + 3 * y / 20);
    }
}