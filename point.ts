class Point {
  // class member
  private x: number;
  private y: number;

  // constructor
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  // getter v1
  getX = () => this.x;
  getY = () => this.x;

  // getter v2
  get xValue(): number {
    return this.x;
  }

  get yValue(): number {
    return this.y;
  }

  // setter v1
  setX = (x: number) => (this.x = x);
  setY = (y: number) => (this.y = y);

  // setter v2
  set xValue(value) {
    this.x = value;
  }

  set yValue(value) {
    this.y = value;
  }

  // method
  printPoint = () => {
    console.log(`X = ${this.x} | Y = ${this.y}`);
  };

  scale(n:number):void {
    this.x *= n;
    this.y *= n;
  }
}

// How to use :
let p1 = new Point();
p1.printPoint();
p1.setX(9);
p1.yValue = 10;
p1.printPoint();
console.log(p1.xValue + "\n");

let p2 = new Point(3, 4);
p2.printPoint();
console.log(p2.yValue + "\n");

let p3 = new Point(undefined, 5);
p3.printPoint();
console.log(p3.xValue + "\n");

let p4 = new Point(8);
p4.printPoint();
p4.xValue = 200;
console.log(p4.xValue + "\n");

let p5 = p4;
p5.setY(6);
p5.printPoint();
p5.scale(2);
p5.printPoint();
