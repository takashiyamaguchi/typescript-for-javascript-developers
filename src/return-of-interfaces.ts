export { };

class Mahotsukai { }
class Souryo { }

class Taro extends Mahotsukai { }

interface Kenjya {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenjya, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
