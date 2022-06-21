class ParentA {
  protected a1: String;
  private a2: number;

  constructor(a1?: String, a2?: number) {
    this.a1 = a1 ?? "Dummy ";
    this.a2 = a2 ?? 0;
  }

  printA1A2(): void {
    console.log(`A1 : ${this.a1} | A2 : ${this.a2}`);
  }
}

class ChildA1 extends ParentA {
  private a3: String;
  constructor(a1: String, a2: number, a3: String) {
    super(a1, a2);
    this.a3 = a3;
  }

  printA1A3 = () => {
    console.log(`A1 : ${this.a1} | A3 : ${this.a3}`);
  };
}

class ChildA2 extends ParentA {
  private a4: number;

  constructor(a4: number) {
    super();
    this.a4 = a4;
  }
  printA1A4 = () => console.log(`A1 : ${this.a1} | A4 : ${this.a4}`);
}


// Simulation ::
let ca1:ChildA1 = new ChildA1("Hello", 45, "Hai");
ca1.printA1A3();
ca1.printA1A2()

let pa1 = ca1 as ParentA;
pa1.printA1A2();

let ca2:ChildA2 = new ChildA2(455);
ca2.printA1A4();
ca2.printA1A2();

let pa2 = ca2 as ParentA;
pa2.printA1A2();

pa2 = pa1;
pa2.printA1A2();