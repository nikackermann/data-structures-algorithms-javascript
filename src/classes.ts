class Cookie {
    constructor(public color: string) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setColor(color: string) {
        this.color = color;
    }
}

let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue');

cookieOne.setColor('purple');
console.log(cookieOne.getColor());
