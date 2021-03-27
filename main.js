const obj1 = {};
const obj2 = {};

deepCopy(obj2, obj1);

function deepCopy(target, Object) {
    for (let key in Object) {
        target[key] = Object[key];
    }
}

console.log(obj2);