const today = new Date();
console.log(today);

const march = new Date('1971-03-26');
const december = new Date('1971-12-16');
if (march.getTime() < december.getTime()) {
    console.log('march before december');
} else {
    console.log('march was not after december');
}
