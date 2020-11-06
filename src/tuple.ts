export {};

let profile: (string | number)[] = ['Ham', 43];
profile = [43, 'Ham'];
// 順番に制約がないunion型

let profile2: [string, number] = ['Ham', 43];
// tuple型は順番に制約をつけられる