function allLongestStrings(inputArray: string[]): string[] {
    const longestStrings = inputArray.sort((a, b) => {
        if (a.length < b.length) {
            return 1
        }
        if (b.length < a.length) {
            return -1
        }

        return 0;
    })[0].length

    return inputArray.filter((val) => val.length === longestStrings);

}

console.log(allLongestStrings(["aba", "aa", "ad", "fghj", "vcd", "aba"]));