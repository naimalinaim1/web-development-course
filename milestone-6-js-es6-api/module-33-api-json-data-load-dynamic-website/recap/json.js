// JavaScript Object Notation -> JSON
const data1 = {name: 'object', prototype: '__proto__'}
const data2 = ['array', '__proto__'];
const data3 = 'string __proto__';
const data1ConvertJson = JSON.stringify(data1);
const data2ConvertJson = JSON.stringify(data2);
const data3ConvertJson = JSON.stringify(data3);

console.log(data1ConvertJson);
console.log(data2ConvertJson);
console.log(data3ConvertJson);


const jsonToData1 = JSON.parse(data1ConvertJson);
const jsonToData2 = JSON.parse(data2ConvertJson);
const jsonToData3 = JSON.parse(data3ConvertJson);

console.log(jsonToData1);
console.log(jsonToData2);
console.log(jsonToData3);
