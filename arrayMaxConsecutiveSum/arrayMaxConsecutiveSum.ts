function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sumResults = [];

    for(let i = 0; i <= inputArray.length; i++) {
        if(inputArray[i+1] !== undefined) {
            sumResults.push(sumOfElements(inputArray.slice(i, i+k)))
        }
    }

    return Math.max.apply(null,sumResults);
}

function sumOfElements(seq: number[]): number {
    return seq.reduce((acc, curr) => acc + curr, 0);

}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));