//@ts-nocheck
import type { AObjectSchemaWithAdapters } from '@arrirpc/schema';
import fs from 'fs';

export const convertToGql = (schema: AObjectSchemaWithAdapters): string => {
    let object = {
        ...schema.properties,
        ...schema.optionalProperties,
        ...schema.elements?.properties,
        ...schema.elements?.optionalProperties,
    };

    const props = Object.entries(object)
        .map(([key, value]) => {
            if (typeof value !== 'object') return key;

            if (
                'properties' in value ||
                'elements' in value ||
                'optionalProperties' in value
            ) {
                if (
                    value.elements &&
                    !(
                        value.elements.properties ||
                        value.elements.optionalProperties
                    )
                )
                    return key;
                return `${key} {\n${convertToGql(value)}\n}`;
            }
            return key;
        })
        .join('\n');

    return props;
};
