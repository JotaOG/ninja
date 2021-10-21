class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.salud = 0;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName = () => console.log(this.nombre);

  showStats = () =>
    console.log(
      `${this.nombre}, ${this.fuerza}, ${this.velocidad}, ${this.salud}`
    );

  drinkSake() {
    this.salud += 10;
    console.log(`salud: ${this.salud}`);
  }
}

const ninja1 = new Ninja("Ichiro");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
