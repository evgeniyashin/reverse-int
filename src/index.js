module.exports = function reverse (n) {
    const number = Math.abs(n).toString().split('').reverse().join('');
    return Number(number);
    
// const number = Math.abs(n).toString();
// let newNumber = '';
// for (let i=0; i < number.length; i++) {
// newNumber = `${number[i]}${newNumber}`
// }
// return Number(newNumber); 
}
