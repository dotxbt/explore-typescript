class Point {
  // class member
  private x: number;
  private y: number;

  // constructor
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  // getter
  getX = () => this.x;
  getY = () => this.x;

  // setter
  setX = (x: number) => (this.x = x);
  setY = (y: number) => (this.y = y);

  // method
  printPoint = () => {
    console.log(`X = ${this.x} | Y = ${this.y}`);
  };
}

// How to use :
let p1 = new Point();
p1.printPoint();
p1.setX(9);
p1.printPoint();

let p2 = new Point(3, 4);
p2.printPoint();

let p3 = new Point(undefined, 5);
p3.printPoint();

let p4 = new Point(8);
p4.printPoint();

let p5 = p4;
p5.setY(6);
p5.printPoint();
