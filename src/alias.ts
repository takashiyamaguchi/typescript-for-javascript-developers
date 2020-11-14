export {}

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  num: 'Ham',
  age: 43
}

type Profile {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 43
}

type Profile2 = typeof example1;

const example3: Profile2 = {
  num: 'Ham',
  age: 43
}
