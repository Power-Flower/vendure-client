import { expect, expectTypeOf, test } from 'vitest';
import { convertToGql } from '../dist';
import { a } from '@arrirpc/schema';

test('optional field', () => {
    const schema = a.object({
        id: a.string(),
        name: a.optional(a.string()),
    });
    const query = convertToGql(schema);
    
    expectTypeOf(query).toEqualTypeOf<string>();
    expect(query).toContain('id');
    expect(query).toContain('name');
    expect(query).not.toContain('{');
    expect(query).not.toContain('}');
});

test('nullable field', () => {
    const schema = a.object({
        id: a.string(),
        name: a.nullable(a.string()),
    });
    const query = convertToGql(schema);
    
    expectTypeOf(query).toEqualTypeOf<string>();
    expect(query).toContain('id');
    expect(query).toContain('name');
    expect(query).not.toContain('{');
    expect(query).not.toContain('}');
});

test('nested object', () => {
    const schema = a.object({
        id: a.string(),
        info: a.object({
            shop: a.object({
                address: a.object({
                    street: a.string(),
                    city: a.string(),
                    country: a.string(),
                }),
                phone: a.string(),
            }),
        }),
    });
    const query = convertToGql(schema);
   
    expectTypeOf(query).toEqualTypeOf<string>();
    expect(query).toContain('id');
    expect(query).toContain('info');
    expect(query).toContain('shop');
    expect(query).toContain('address');
    expect(query).toContain('street');
    expect(query).toContain('city');
    expect(query).toContain('country');
    expect(query).toContain('phone');
    expect(query).toContain('{');
    expect(query).toContain('}');
});

test('complex object', () => {
    const schema = a.object({
        id: a.string(),
        name: a.string(),
        description: a.optional(a.string()),
        additional: a.optional(a.object({
            additional_id: a.string(),
            additional_name: a.string(),
        })),
        labels: a.array(a.string()),
        tags: a.array(a.object({
            tag_id: a.string(),
            tag_name: a.optional(a.string()),
        })),
        createdAt: a.timestamp(),
    });
    const query = convertToGql(schema);

    expectTypeOf(query).toEqualTypeOf<string>();
    expect(query).toContain('id');
    expect(query).toContain('name');
    expect(query).toContain('description');
    expect(query).toContain('additional');
    expect(query).toContain('additional_id');
    expect(query).toContain('additional_name');
    expect(query).toContain('labels');
    expect(query).toContain('tags');
    expect(query).toContain('tag_id');
    expect(query).toContain('tag_name');
    expect(query).toContain('createdAt');
    expect(query).toContain('{');
    expect(query).toContain('}');
});
