'use strict';

const fn = () => {
    console.log(a); // undefined 
    var a = 10;
    console.log(a); // 10
};

fn();

module.exports = { fn };
