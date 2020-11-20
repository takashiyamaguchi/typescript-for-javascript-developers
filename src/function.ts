export {}

function bmi(height: number, weight: number){
  return weight / (height * height);
}

console.log(bmi(1.63, 68.8));

function bestWeight(height: number){
  return (height * height) * 22;
}

console.log(bestWeight(1.63));
