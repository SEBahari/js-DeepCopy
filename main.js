let obj1 = {
    name: 'Ehsan Baharinasab',
    id: 123456789,
    courses: ['riazi1', 'fizik1'],
    marks: {
        riazi1: {
            firstTerm: 12,
            secondTerm: 13
        },
        fizik1: 12,
    },
};
let obj2 = {};

deepCopy(obj2, obj1);

obj1.marks.riazi1 = 3;
console.log(obj1, obj2);

function deepCopy(target, object) {
    for (let key in object) {
        // console.log(key, object[key]);
        if (typeof object[key] === "object" && !Array.isArray(object[key])) {
            target[key] = {}
            deepCopy(target[key], object[key]);
        } else {
            target[key] = object[key];
        }
    }
}