function arrayConversion(inputArray: number[]): number {
    let resultArray = inputArray;
    let isOdd = true;

    while(resultArray.length > 1) {
        if(isOdd) {
            let tempArr = []
            resultArray.forEach((val, i) => {
                if(i % 2 === 0) {
                    tempArr.push(val + resultArray[i+1])
                }
            });
            resultArray = tempArr;
        } else {
            let tempArr = []
            resultArray.forEach((val, i) => {
                if(i % 2 === 0) {
                    tempArr.push(val * resultArray[i+1])
                }
            });
            resultArray = tempArr;
        }

        isOdd = !isOdd;


    }

    return resultArray[0];

}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
