// 함수는 객체다.
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있습니다.
foo.prop = 10;

foo.method = function () {
  console.log(this.prop);
};

foo.method();
