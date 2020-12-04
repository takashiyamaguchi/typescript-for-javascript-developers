export { };

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atushi';
  static lastName: string = 'Ishida';

  static work(): string {
    return `Hey, guys! This is ${this.firstName}! Are you interested in TS? Lets dive into TS!`;
    // return 'Hey, guys! Are you interested in TS? Lets dive into TS!'
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());

// 動的メンバを使う場合、毎回new演算子でインスタンスを作成しないといけない
