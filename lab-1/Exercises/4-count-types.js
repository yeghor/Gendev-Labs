'use strict';

const typesArr = [
    true, 200, 100,
    "string", false, null,
    42, "string2", {obj: "some-obj"},
    true, [1,2,3], null,
    [1,2,3,4,5], undefined, undefined
];

const countTypesInArray = (typesArr) => {
    const count = {};

    for(let i of typesArr) {
        let type = typeof(i);

        if(i === null) { type = "null"};
        
        if(type in count) {
            count[type] += 1;
        } else {
            count[type] = 1;
        }
    }
    
    return count;
};

const arrayTypes = countTypesInArray(typesArr);
console.log(arrayTypes);

module.exports = { countTypesInArray };
