export declare const FacetValueSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    facet: {
        id: string;
        name: string;
        code: string;
    } | undefined;
    facetId: string;
    name: string;
    code: string;
}, false>;
export declare const FacetSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
    code: string;
    values: {
        id: string;
        facetId: string;
        name: string;
        code: string;
    }[];
}, false>;
export declare const ProductOptionSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    code: string;
    name: string;
    groupId: string;
    group: {
        id: string;
        code: string;
        name: string;
    };
}, false>;
export declare const ProductOptionGroupSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    code: string;
    name: string;
    options: {
        id: string;
        code: string;
        name: string;
        groupId: string;
    }[];
}, false>;
export declare const ProductSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
    slug: string;
    description: string;
    featuredAsset: {
        id: string;
        name: string;
        type: string;
        source: string;
    };
    assets: {
        id: string;
        name: string;
        type: string;
        source: string;
    }[];
    facetValues: {
        id: string;
        facet: {
            id: string;
            name: string;
            code: string;
        } | undefined;
        facetId: string;
        name: string;
        code: string;
    }[];
    customFields: {
        location: string;
        date: Date;
    };
}, false>;
export declare const ProductVariantSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    productId: string;
    sku: string;
    name: string;
    featuredAsset: {
        id: string;
        name: string;
        type: string;
        source: string;
    };
    assets: {
        id: string;
        name: string;
        type: string;
        source: string;
    }[];
    price: number;
    currencyCode: string;
    priceWithTax: number;
    stockLevel: number;
    options: {
        id: string;
        code: string;
        name: string;
        groupId: string;
        group: {
            id: string;
            code: string;
            name: string;
        };
    }[];
    facetValues: {
        id: string;
        facet: {
            id: string;
            name: string;
            code: string;
        } | undefined;
        facetId: string;
        name: string;
        code: string;
    }[];
}, false>;
