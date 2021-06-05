function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

const logAll = (i) => {
  console.log(i);
};

repeat(5, logAll);
