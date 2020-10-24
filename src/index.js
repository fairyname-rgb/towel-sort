
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let answer = [];
  if(matrix === undefined){
  return answer;
}
for (let i = 0; i < matrix.length; i++){
  if (i % 2 !== 0){
    matrix[i].reverse();
    }
  };
  for (let m = 0; m < matrix.length; m++) {
    answer = answer.concat(matrix[m]);   
  };
  return answer;
}
