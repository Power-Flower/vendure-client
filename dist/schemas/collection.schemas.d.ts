export declare const CollectionBreadcrumbSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
    slug: string;
}, false>;
export declare const CollectionSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    name: string;
    description: string;
    languageCode: string;
    slug: string;
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
    breadcrumbs: {
        id: string;
        name: string;
        slug: string;
    }[];
    position: number;
    parentId: string;
    productVariants: {
        totalItems: number;
        items: {
            id: string;
            createdAt: Date;
            name: string;
            options: {
                id: string;
                name: string;
                code: string;
                groupId: string;
                group: {
                    id: string;
                    name: string;
                    code: string;
                };
            }[];
            languageCode: string;
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
            facetValues: {
                id: string;
                name: string;
                code: string;
                facetId: string;
                facet?: {
                    id: string;
                    name: string;
                    code: string;
                } | undefined;
            }[];
            productId: string;
            sku: string;
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
            product: {
                id: string;
                createdAt: Date;
                name: string;
                description: string;
                languageCode: string;
                slug: string;
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
                facetValues: {
                    id: string;
                    name: string;
                    code: string;
                    facetId: string;
                    facet?: {
                        id: string;
                        name: string;
                        code: string;
                    } | undefined;
                }[];
                customFields: {
                    location: string | null;
                    date: Date;
                    matchCode: string | null;
                };
            };
        }[];
    };
}, false>;
export declare const CollectionQuerySchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    collection: {
        id: string;
        createdAt: Date;
        name: string;
        description: string;
        languageCode: string;
        slug: string;
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
        breadcrumbs: {
            id: string;
            name: string;
            slug: string;
        }[];
        position: number;
        parentId: string;
        productVariants: {
            totalItems: number;
            items: {
                id: string;
                createdAt: Date;
                name: string;
                options: {
                    id: string;
                    name: string;
                    code: string;
                    groupId: string;
                    group: {
                        id: string;
                        name: string;
                        code: string;
                    };
                }[];
                languageCode: string;
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
                facetValues: {
                    id: string;
                    name: string;
                    code: string;
                    facetId: string;
                    facet?: {
                        id: string;
                        name: string;
                        code: string;
                    } | undefined;
                }[];
                productId: string;
                sku: string;
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
                product: {
                    id: string;
                    createdAt: Date;
                    name: string;
                    description: string;
                    languageCode: string;
                    slug: string;
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
                    facetValues: {
                        id: string;
                        name: string;
                        code: string;
                        facetId: string;
                        facet?: {
                            id: string;
                            name: string;
                            code: string;
                        } | undefined;
                    }[];
                    customFields: {
                        location: string | null;
                        date: Date;
                        matchCode: string | null;
                    };
                };
            }[];
        };
    };
}, false>;
