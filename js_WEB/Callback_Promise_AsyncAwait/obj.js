const obj = {
  name: "yishai",
  getName: ()=> {
    return obj.name;
  },
};
const obj2 = {
  name: "moshe",
};
obj2.getName = obj.getName;
console.log(obj2.getName());

console.log(obj.getName());
