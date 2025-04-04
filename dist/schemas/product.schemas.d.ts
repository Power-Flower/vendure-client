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
    createdAt: Date;
    languageCode: string;
    name: string;
    slug: string;
    description: string;
    featuredAsset: {
        id: string;
        createdAt: string;
        name: string;
        type: string;
        fileSize: number;
        mimeType: string;
        width: number;
        height: number;
        source: string;
        preview: string;
    };
    assets: {
        id: string;
        createdAt: string;
        name: string;
        type: string;
        fileSize: number;
        mimeType: string;
        width: number;
        height: number;
        source: string;
        preview: string;
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
    variants: {
        totalItems: number;
        items: {
            id: string;
            productId: string;
            createdAt: Date;
            languageCode: string;
            sku: string;
            name: string;
            featuredAsset: {
                id: string;
                createdAt: string;
                name: string;
                type: string;
                fileSize: number;
                mimeType: string;
                width: number;
                height: number;
                source: string;
                preview: string;
            } | null;
            assets: {
                id: string;
                createdAt: string;
                name: string;
                type: string;
                fileSize: number;
                mimeType: string;
                width: number;
                height: number;
                source: string;
                preview: string;
            }[];
            price: number;
            currencyCode: string;
            priceWithTax: number;
            stockLevel: string;
            taxRateApplied: {
                id: string;
                name: string;
                enabled: boolean;
                value: number;
                category: {
                    id: string;
                    name: string;
                    isDefault: boolean;
                };
                zone: {
                    id: string;
                    name: string;
                };
            };
            taxCategory: {
                id: string;
                name: string;
                isDefault: boolean;
            };
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
        }[];
    };
}, false>;
export declare const ProductVariantSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    productId: string;
    createdAt: Date;
    languageCode: string;
    sku: string;
    name: string;
    featuredAsset: {
        id: string;
        createdAt: string;
        name: string;
        type: string;
        fileSize: number;
        mimeType: string;
        width: number;
        height: number;
        source: string;
        preview: string;
    } | null;
    assets: {
        id: string;
        createdAt: string;
        name: string;
        type: string;
        fileSize: number;
        mimeType: string;
        width: number;
        height: number;
        source: string;
        preview: string;
    }[];
    price: number;
    currencyCode: string;
    priceWithTax: number;
    stockLevel: string;
    taxRateApplied: {
        id: string;
        name: string;
        enabled: boolean;
        value: number;
        category: {
            id: string;
            name: string;
            isDefault: boolean;
        };
        zone: {
            id: string;
            name: string;
        };
    };
    taxCategory: {
        id: string;
        name: string;
        isDefault: boolean;
    };
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
    product: {
        id: string;
        createdAt: Date;
        languageCode: string;
        name: string;
        slug: string;
        description: string;
        featuredAsset: {
            id: string;
            createdAt: string;
            name: string;
            type: string;
            fileSize: number;
            mimeType: string;
            width: number;
            height: number;
            source: string;
            preview: string;
        };
        assets: {
            id: string;
            createdAt: string;
            name: string;
            type: string;
            fileSize: number;
            mimeType: string;
            width: number;
            height: number;
            source: string;
            preview: string;
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
    };
}, false>;
