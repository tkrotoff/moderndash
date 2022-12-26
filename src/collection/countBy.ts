import type { RecordKey } from '../types';

export function countBy<T, U extends RecordKey>(iteratee: (value: T) => U, array: T[]): Record<U, number> {
    const result = {} as Record<U, number>;
    for (const value of array) {
        const key = iteratee(value);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (result[key] === undefined) {
            result[key] = 1;
        } else {
            result[key] += 1;
        }
    }
    return result;
}