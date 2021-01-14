function arrayPreviousLess(items: number[]): number[] {
    const result: number[] = [];

    for(let i=0; i < items.length; i++) {
        result.push(items[i-1] < items[i] ? items[i-1] : -1 );
    }

    return result;

}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([6, 5, 2, 10, 5]));