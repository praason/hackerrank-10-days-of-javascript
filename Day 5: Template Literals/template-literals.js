function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const constPart = Math.sqrt(p ** 2 - 16 * a) / 4;
    return [p / 4 - constPart, p / 4 + constPart];
}
