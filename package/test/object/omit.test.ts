import { describe, test, expect } from 'vitest';

import { omit } from '@object/omit.js';

describe('omit', () => {
    test('should omit the specified keys from an object', () => {
        const obj = { a: 1, b: 2, c: 3 };

        expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
    });

    test('should not mutate the original object', () => {
        const obj = { a: 1, b: 2, c: 3 };

        expect(omit(obj, ['a', 'c'])).not.toBe(obj);
    });

    test('should return an empty object if all keys are omitted', () => {
        const obj = { a: 1, b: 2, c: 3 };

        expect(omit(obj, ['a', 'b', 'c'])).toEqual({});
    });
});