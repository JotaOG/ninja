class Ninja {
  constructor(nombre) {
    this.nombre = nombre /* = "Mario" */;
    this.salud = 0;
    this.velocidad = 3;
    this.fuerza = 3;
  }
  sayName() {
    return this.nombre;
  }
  showStats() {
    console.log(
      `${this.nombre}, ${this.salud}, ${this.velocidad}, ${this.fuerza}`
    );
  }
  drinkSake() {
    this.salud += 10;
    console.log(`salud: ${this.salud}`);
  }
  drinkMagic() {
    this.velocidad += 10;
    console.log(`velocidad: ${this.velocidad}`);
  }
}
const ninja1 = new Ninja("Ichiro");
const nombre = ninja1.sayName();
console.log(nombre);
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkMagic();
