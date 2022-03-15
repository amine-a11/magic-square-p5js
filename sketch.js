var x, y, year_, month_, day_, sum = 0;
var result, id;
squares = []
function setup() {
    createCanvas(windowWidth * 0.7, windowHeight * 0.7);
    x = floor(width / 4);
    y = floor(height / 4);
    day_ = createSelect('');
    month_ = createSelect('');
    year_ = createSelect('');
    day_.style("padding", "15px 15px");
    month_.style("padding", "15px 15px");
    year_.style("padding", "15px 15px");
    id = createP('sum = ');
    id.position(0, height + 20)
    id.style("font-size", "50px");
    result = createP('');
    result.style("font-size", "50px");
    for (let i = 2020; i > 1990; i--) {
        year_.option(i.toString());
    }
    for (let i = 12; i > 0; i--) {
        if (i < 10) {
            month_.option('0' + i.toString());
        } else {
            month_.option(i.toString());
        }
    }
    for (let i = 31; i > 0; i--) {
        if (i < 10) {
            day_.option('0' + i.toString());
        } else {
            day_.option(i.toString());
        }
    }
    var button = createButton('fill birthday magic square');
    button.style("background-color", "DarkViolet");
    button.style("padding", "18px 18px");
    button.style("font-size", '18px');
    button.mousePressed(magicSquare);
    k = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            squares[k] = new smallsquare(j * x, i * y, x, y, false, '');
            k++;
        }
    }

}
function magicSquare() {
    var c = parseInt(year_.value().substring(0, 2));
    var d = parseInt(year_.value().substring(2));
    var b = parseInt(month_.value());
    var a = parseInt(day_.value());
    for (let i = 0; i < squares.length; i++) {
        switch (i) {
            case 0:
                squares[i].num = a;
                break;
            case 1:
                squares[i].num = b;
                break;
            case 2:
                squares[i].num = c;
                break;
            case 3:
                squares[i].num = d;
                break;
            case 4:
                squares[i].num = c - 1;
                break;
            case 5:
                squares[i].num = d + 1;
                break;
            case 6:
                squares[i].num = a - 1;
                break;
            case 7:
                squares[i].num = b + 1;
                break;
            case 8:
                squares[i].num = d + 1;
                break;
            case 9:
                squares[i].num = c + 1;
                break;
            case 10:
                squares[i].num = b - 1;
                break;
            case 11:
                squares[i].num = a - 1;
                break;
            case 12:
                squares[i].num = b;
                break;
            case 13:
                squares[i].num = a - 2;
                break;
            case 14:
                squares[i].num = d + 2;
                break;
            case 15:
                squares[i].num = c;
                break;
        }
    }
}
function mousePressed() {
    for (let s of squares) {
        if (s.sheck(mouseX, mouseY) && s.lighted == false) {
            s.lighted = true;
            sum += s.num;
        } else if (s.sheck(mouseX, mouseY) && s.lighted == true) {
            s.lighted = false;
            sum -= s.num;
        }
    }
}

function draw() {
    background(200);

    for (let s of squares) {
        s.show();
    }
    result.position(140, height + 20);
    result.html(sum);
}