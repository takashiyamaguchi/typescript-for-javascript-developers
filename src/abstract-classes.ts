export { };

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'ROARRR';
  }
}

class Tiger extends Animal {
  cry() {
    return 'GRRRRRRRRR';
  }
}
