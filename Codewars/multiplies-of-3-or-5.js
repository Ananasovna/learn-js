function solution(number){
  let numbers = [];

  for ( let i = number - 1; i > 2; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      numbers.push(i);
    }
  }

  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(solution(6));