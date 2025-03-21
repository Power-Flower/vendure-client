import { test } from 'vitest';
import { ActiveOrderSchema, GetActiveCustomerSchema } from '../dist';

test('Return schema', () => {
    const schema = ActiveOrderSchema;

    console.log('schema', convertToGql(schema));
});
