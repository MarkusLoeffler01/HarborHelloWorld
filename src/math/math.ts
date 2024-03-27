

export function sum(...numbers: number[]) {
    if(numbers.length === 0) throw new EmptyArrayError();
    return numbers.reduce((partialSum, a) => partialSum + a, 0);
}

export function sub(...numbers: number[]): number {
    if(!(numbers.every(el => typeof el === "number"))) throw new EmptyArrayError();
    if (numbers.length === 0) return 0;
    return numbers.reduce((partialResult, a, index) => {
        return index === 0 ? a : partialResult - a; // Subtrahiere, wenn index nicht 0 ist
    });
}

export function multiply(...numbers: number[]): number {
    return numbers.reduce((partialProduct, a) => partialProduct * a, 1);
}


class EmptyArrayError extends Error {};

export { EmptyArrayError };