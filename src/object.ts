export {}

let profile1: object = { name: 'yama' };
profile1 = { birthYear: 1938 };

let profile2: {
  name: string,
} = { name: 'yama' };

profile2 = { name: 'ert' };

// 型注釈はできるだけ拘束力を強くする
