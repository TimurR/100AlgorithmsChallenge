function almostIncreasingSequence(sequence: number[]): boolean {
    let amountToDelete = 0;
    sequence.forEach((curr, i) => {
        if(curr > sequence[++i] ) {
            amountToDelete = amountToDelete + 1;
        }
    });

    return amountToDelete <= 1;

}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 