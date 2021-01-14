function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    const result: number[] = [];

    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i+1] !== undefined) {
            result.push(Math.abs(inputArray[i] - inputArray[i+1]));
        }
    }

    return Math.max.apply(null, result)

}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]))