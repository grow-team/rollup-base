export function square2( obj ) {
    console.log('second square');
    inlineFun('test');
    return obj;
}

function inlineFun(str: String){
    return [1,2,3,4];
}

export function square3( obj ) {
    console.log('second square');
    return obj;
}
