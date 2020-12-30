function addBorder(picture: string[]): string[] {
    const borderLong = Array(picture[0].length + 2).fill('*').join('');
    const borderedValues = picture.map(val=> `*${val}*`);

    return [borderLong, ...borderedValues, borderLong];

}

console.log(addBorder(["abc", "ded"]));