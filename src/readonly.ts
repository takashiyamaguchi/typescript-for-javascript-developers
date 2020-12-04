export { };

class VisaCard {
  // readonly owner: string;
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }

  // test(): string {
  //   return `owner: ${this.owner}`;
  // }
}

let myVisaCard = new VisaCard('はむさん');
// console.log(myVisaCard.test());
// myVisaCard.owner = 'ベーコン';
