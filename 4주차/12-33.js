function changVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

var num = 100;
var person = { name: "Lee" };

console.log(num);
console.log(person);

changVal(num, person);

console.log(num); // 100

console.log(person); // {name: "Kim"}
