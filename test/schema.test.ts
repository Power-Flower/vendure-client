import { test } from 'vitest';
import { ActiveOrderSchema, convertToGql } from '../dist';

test('Return schema', () => {
    const schema = ActiveOrderSchema;

    console.log('schema', convertToGql(schema));
});
