'use strict';

const inc = (num) => {
    num.n += 1;
};

const num = { n: 5 };
inc(num);
console.log(num);

