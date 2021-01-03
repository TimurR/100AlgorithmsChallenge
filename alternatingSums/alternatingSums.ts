function alternatingSums(a: number[]): number[] {
    const first = a.filter((_, i) => (i+1) % 2 !== 0).reduce((acc, current) => acc + current, 0);
    const second = a.filter((_, i) => (i+1) % 2 === 0).reduce((acc, current) => acc + current, 0);
    
    return [first, second];

}

console.log(alternatingSums([50, 60, 60, 45, 70]))