function adjacentElementsProduct(inputArray: number[]): number {
    const resultArr  = [];

    for (let i=0; i < inputArray.length - 1; i++) {
            resultArr.push(inputArray[i] * inputArray[i+1]);
    }
    return Math.max.apply(null, resultArr);

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));