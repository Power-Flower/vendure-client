import { test } from 'vitest';
import { ActiveOrderSchema, GetActiveCustomerSchema } from '../dist';

test('Return schema', () => {
    let schema = ActiveOrderSchema;
    
    console.log('schema', convertToGql(schema));
})