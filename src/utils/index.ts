import type { AArraySchema, AObjectSchema, ASchema } from '@arrirpc/schema';

export const convertToGql = (schema: AObjectSchema): string => {
    const object: Record<string, ASchema | AObjectSchema | AArraySchema> = {
        ...schema.properties,
        ...schema.optionalProperties,
    };

    const entries = Object.entries(object);
    if (entries.length === 0) return '';

    const props = entries.map(([key, value]) => {
        if ('properties' in value) {
            return `${key} { ${convertToGql(value)} }`;
        }
        if ('elements' in value && !('type' in value.elements)) {
            return `${key} { ${convertToGql(value.elements)} }`;
        }
        return key;
    });

    return props.join(' ');
};
