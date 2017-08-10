'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function square1(obj) {
    console.log('first square');
    return "square1";
}

function square2(obj) {
    console.log('second square');
    inlineFun('test');
    return obj;
}
function inlineFun(str) {
    return [1, 2, 3, 4];
}

function myFunction() {
    square2('');
    return square1('Hi');
}

exports.myFunction = myFunction;
