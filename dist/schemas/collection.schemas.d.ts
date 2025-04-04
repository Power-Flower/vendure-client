export declare const CollectionBreadcrumbSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
    slug: string;
}, false>;
export declare const CollectionSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    languageCode: string;
    name: string;
    slug: string;
    breadcrumbs: {
        id: string;
        name: string;
        slug: string;
    }[];
    position: number;
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
    parentId: string;
    productVariants: {
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
        }[];
    };
}, false>;
export declare const CollectionQuerySchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    collection: {
        id: string;
        createdAt: Date;
        languageCode: string;
        name: string;
        slug: string;
        breadcrumbs: {
            id: string;
            name: string;
            slug: string;
        }[];
        position: number;
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
        parentId: string;
        productVariants: {
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
            }[];
        };
    };
}, false>;
