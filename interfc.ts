interface CommonFunc {
  printName(name: String): void;
  getANumber(): number;
}

class A implements CommonFunc {
  printName(name: String): void {
    console.log(`Hello Sobat A, ${name}`);
  }
  getANumber(): number {
    return 123109;
  }
}

class B implements CommonFunc {
  printName(name: String): void {
    console.log(`Salam dari B, Hai ${name}`);
  }
  getANumber(): number {
    return 9238592045;
  }
}

const printCommon = (cf: CommonFunc) => {
    cf.getANumber();
    cf.printName("Sabituddin Bigbang");
}

printCommon(new A());
printCommon(new B());