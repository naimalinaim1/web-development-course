// js dynamic data type
/**
 * primitive
 * -> string, number, boolean
 * -> null, undefined
 * composite/ non primitive
 * -> object, arrays
 */
const p = { job: "web developer" };
let q = p;
q.job = 'backend';
console.log(p, q);