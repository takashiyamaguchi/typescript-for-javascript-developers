"use strict";
exports.__esModule = true;
// - owner
//   - 所有者
//   - 初期化時に設定できる
//   - 途中で変更できない
//   - 参照できる
// - secretNumber
//   - 個人番号
//   - 初期化時設定できる
//   - 途中で変更できる
//   - 参照できない
var MyNumberCard = /** @class */ (function () {
    function MyNumberCard(owner, secretNumber) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }
    Object.defineProperty(MyNumberCard.prototype, "owner", {
        // getter
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyNumberCard.prototype, "secretNumber", {
        set: function (secretNumber) {
            this._secretNumber = secretNumber;
        },
        enumerable: false,
        configurable: true
    });
    MyNumberCard.prototype.debugPrint = function () {
        return "secretNumber: " + this._secretNumber;
    };
    return MyNumberCard;
}());
var card = new MyNumberCard('ハムさん', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
