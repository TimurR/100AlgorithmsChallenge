function addTwoDigits(n: any): number {
    return `${n}`.split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(295));
console.log(addTwoDigits(111));