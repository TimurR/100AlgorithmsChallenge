function alphabeticShift(inputString: string): string {
    const input = inputString.split('');

    return input.map(l => {
        if(l.charCodeAt(0) < 122) {
            return String.fromCharCode(l.charCodeAt(0) + 1)
        } else {
            return 'a';
        }
    }).join('');
}

console.log(alphabeticShift('crazyz'));