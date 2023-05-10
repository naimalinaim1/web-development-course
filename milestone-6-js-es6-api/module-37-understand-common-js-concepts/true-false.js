/**
 * Truthy:
 * 1-> true
 * 2-> any number (+ve, -ve) will be truthy other than 0
 * 3-> any string other than empty string
 * 3-> '0' 'false'
 * 4-> {}
 * 5-> []
 * 
 * Falsy:
 * 1-> false
 * 2-> 0
 * 3-> '' (empty string)
 * 3-> undefined
 * 4-> null
 */

if (!true){
    console.log('condition is execute: true');
}
if (!false){
    console.log('condition is execute: false');
}
if (!null){
    console.log('condition is execute: null');
}
if (!undefined){
    console.log('condition is execute: undefined');
}
if (!0){
    console.log('condition is execute: 0');
}
if (!''){
    console.log("condition is execute: ''");
}

// check truthy
const z = true;
if(!!z) {
    console.log('condition is true')
}