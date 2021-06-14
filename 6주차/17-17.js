// 생성자 함수로써 정의하지 않은 일반 함수
function add(x, y) {
  return x + y;
}

let inst = new add();

console.log(inst); // {}
