function areSimilar(a: number[], b: number[]): boolean {
    if(a.length != b.length) {
        return false;
    }

    const asorted = a.sort((a,b) => a < b ? -1 : 1);
    const bsorted = b.sort((a,b) => a < b ? -1 : 1);

    return asorted.every((val, index) => val === bsorted[index]);
   
}

console.log(areSimilar([1, 2, 3], [1, 2, 3, 4]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 5, 2], [2, 1, 5]));
