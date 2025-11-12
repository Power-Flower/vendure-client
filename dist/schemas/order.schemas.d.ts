export declare const PromotionSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    name: string;
    description: string;
    enabled: boolean;
    startsAt: Date | null;
    endsAt: Date | null;
    couponCode: string;
    perCustomerUsageLimit: number | null;
}, false>;
export declare const SurchargeSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    description: string;
    taxRate: number;
    sku: string;
    price: number;
    priceWithTax: number;
    taxLines: {
        description: string;
        taxRate: number;
    }[];
}, false>;
export declare const DiscountSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    type: string;
    description: string;
    amount: number;
    adjustmentSource: string;
    amountWithTax: number;
}, false>;
export declare const OrderLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    taxRate: number;
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
    quantity: number;
    taxLines: {
        description: string;
        taxRate: number;
    }[];
    unitPrice: number;
    unitPriceWithTax: number;
    discountedUnitPrice: number;
    discountedUnitPriceWithTax: number;
    orderPlacedQuantity: number;
    linePrice: number;
    linePriceWithTax: number;
    discountedLinePrice: number;
    discountedLinePriceWithTax: number;
    proratedLinePrice: number;
    proratedLinePriceWithTax: number;
    lineTax: number;
    discounts: {
        type: string;
        description: string;
        amount: number;
        adjustmentSource: string;
        amountWithTax: number;
    }[];
    productVariant?: {
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
    } | undefined;
}, false>;
export declare const ShippingMethodSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
    description: string;
    code: string;
}, false>;
export declare const ShippingLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    price: number;
    priceWithTax: number;
    shippingMethod: {
        id: string;
        name: string;
        description: string;
        code: string;
    };
    discountedPrice: number;
    discountedPriceWithTax: number;
}, false>;
export declare const OrderAddressSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    fullName: string | null;
    company: string | null;
    streetLine1: string | null;
    streetLine2: string | null;
    city: string | null;
    province: string | null;
    postalCode: string | null;
    country: string | null;
    phoneNumber: string | null;
    countryCode: string | null;
}, false>;
export declare const OrderSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    type: string;
    code: string;
    currencyCode: string;
    shipping: number;
    total: number;
    state: string;
    lines: {
        id: string;
        taxRate: number;
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
        quantity: number;
        taxLines: {
            description: string;
            taxRate: number;
        }[];
        unitPrice: number;
        unitPriceWithTax: number;
        discountedUnitPrice: number;
        discountedUnitPriceWithTax: number;
        orderPlacedQuantity: number;
        linePrice: number;
        linePriceWithTax: number;
        discountedLinePrice: number;
        discountedLinePriceWithTax: number;
        proratedLinePrice: number;
        proratedLinePriceWithTax: number;
        lineTax: number;
        discounts: {
            type: string;
            description: string;
            amount: number;
            adjustmentSource: string;
            amountWithTax: number;
        }[];
        productVariant?: {
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
        } | undefined;
    }[];
    discounts: {
        type: string;
        description: string;
        amount: number;
        adjustmentSource: string;
        amountWithTax: number;
    }[];
    orderPlacedAt: Date | null;
    active: boolean;
    customer: {
        id: string;
        customFields: {
            subscribedUntil: Date | null;
        };
        phoneNumber: string;
        title: string;
        firstName: string;
        lastName: string;
        emailAddress: string;
        addresses: {
            id: string;
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: {
                id: string;
                name: string;
                enabled: boolean;
                code: string;
            };
            phoneNumber: string;
            defaultShippingAddress: boolean;
            defaultBillingAddress: boolean;
        }[];
    } | null;
    surcharges: {
        id: string;
        createdAt: Date;
        description: string;
        taxRate: number;
        sku: string;
        price: number;
        priceWithTax: number;
        taxLines: {
            description: string;
            taxRate: number;
        }[];
    }[];
    couponCodes: string[];
    promotions: {
        id: string;
        createdAt: Date;
        name: string;
        description: string;
        enabled: boolean;
        startsAt: Date | null;
        endsAt: Date | null;
        couponCode: string;
        perCustomerUsageLimit: number | null;
    }[];
    payments: {
        id: string;
        createdAt: Date;
        method: string;
        state: string;
        transactionId: string;
        amount: number;
        errorMessage: string | null;
        refunds: {
            id: string;
            createdAt: Date;
            items: number;
            shipping: number;
            adjustment: number;
            total: number;
            method: string;
            state: string;
            transactionId: string;
            reason: string;
            lines: {
                orderLineId: string;
                quantity: number;
                refundId: string;
            }[];
            paymentId: string;
        }[];
    }[];
    totalQuantity: number;
    subTotal: number;
    subTotalWithTax: number;
    shippingLines: {
        id: string;
        price: number;
        priceWithTax: number;
        shippingMethod: {
            id: string;
            name: string;
            description: string;
            code: string;
        };
        discountedPrice: number;
        discountedPriceWithTax: number;
    }[];
    shippingWithTax: number;
    totalWithTax: number;
    taxSummary: {
        description: string;
        taxRate: number;
        taxBase: number;
        taxTotal: number;
    }[];
    shippingAddress?: {
        fullName: string | null;
        company: string | null;
        streetLine1: string | null;
        streetLine2: string | null;
        city: string | null;
        province: string | null;
        postalCode: string | null;
        country: string | null;
        phoneNumber: string | null;
        countryCode: string | null;
    } | undefined;
    billingAddress?: {
        fullName: string | null;
        company: string | null;
        streetLine1: string | null;
        streetLine2: string | null;
        city: string | null;
        province: string | null;
        postalCode: string | null;
        country: string | null;
        phoneNumber: string | null;
        countryCode: string | null;
    } | undefined;
}, false>;
export declare const OrderListSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    totalItems: number;
    items: {
        id: string;
        createdAt: Date;
        type: string;
        code: string;
        currencyCode: string;
        shipping: number;
        total: number;
        state: string;
        lines: {
            id: string;
            taxRate: number;
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
            quantity: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            orderPlacedQuantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                type: string;
                description: string;
                amount: number;
                adjustmentSource: string;
                amountWithTax: number;
            }[];
            productVariant?: {
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
            } | undefined;
        }[];
        discounts: {
            type: string;
            description: string;
            amount: number;
            adjustmentSource: string;
            amountWithTax: number;
        }[];
        orderPlacedAt: Date | null;
        active: boolean;
        customer: {
            id: string;
            customFields: {
                subscribedUntil: Date | null;
            };
            phoneNumber: string;
            title: string;
            firstName: string;
            lastName: string;
            emailAddress: string;
            addresses: {
                id: string;
                fullName: string;
                company: string;
                streetLine1: string;
                streetLine2: string;
                city: string;
                province: string;
                postalCode: string;
                country: {
                    id: string;
                    name: string;
                    enabled: boolean;
                    code: string;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
        } | null;
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            taxRate: number;
            sku: string;
            price: number;
            priceWithTax: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            enabled: boolean;
            startsAt: Date | null;
            endsAt: Date | null;
            couponCode: string;
            perCustomerUsageLimit: number | null;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            state: string;
            transactionId: string;
            amount: number;
            errorMessage: string | null;
            refunds: {
                id: string;
                createdAt: Date;
                items: number;
                shipping: number;
                adjustment: number;
                total: number;
                method: string;
                state: string;
                transactionId: string;
                reason: string;
                lines: {
                    orderLineId: string;
                    quantity: number;
                    refundId: string;
                }[];
                paymentId: string;
            }[];
        }[];
        totalQuantity: number;
        subTotal: number;
        subTotalWithTax: number;
        shippingLines: {
            id: string;
            price: number;
            priceWithTax: number;
            shippingMethod: {
                id: string;
                name: string;
                description: string;
                code: string;
            };
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shippingWithTax: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
        shippingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
        billingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
    }[];
}, false>;
export declare const OrderByCodeSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    orderByCode: {
        state: string;
    };
}, false>;
export declare const ActiveOrderSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    activeOrder: {
        id: string;
        createdAt: Date;
        type: string;
        code: string;
        currencyCode: string;
        shipping: number;
        total: number;
        state: string;
        lines: {
            id: string;
            taxRate: number;
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
            quantity: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            orderPlacedQuantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                type: string;
                description: string;
                amount: number;
                adjustmentSource: string;
                amountWithTax: number;
            }[];
            productVariant?: {
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
            } | undefined;
        }[];
        discounts: {
            type: string;
            description: string;
            amount: number;
            adjustmentSource: string;
            amountWithTax: number;
        }[];
        orderPlacedAt: Date | null;
        active: boolean;
        customer: {
            id: string;
            customFields: {
                subscribedUntil: Date | null;
            };
            phoneNumber: string;
            title: string;
            firstName: string;
            lastName: string;
            emailAddress: string;
            addresses: {
                id: string;
                fullName: string;
                company: string;
                streetLine1: string;
                streetLine2: string;
                city: string;
                province: string;
                postalCode: string;
                country: {
                    id: string;
                    name: string;
                    enabled: boolean;
                    code: string;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
        } | null;
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            taxRate: number;
            sku: string;
            price: number;
            priceWithTax: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            enabled: boolean;
            startsAt: Date | null;
            endsAt: Date | null;
            couponCode: string;
            perCustomerUsageLimit: number | null;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            state: string;
            transactionId: string;
            amount: number;
            errorMessage: string | null;
            refunds: {
                id: string;
                createdAt: Date;
                items: number;
                shipping: number;
                adjustment: number;
                total: number;
                method: string;
                state: string;
                transactionId: string;
                reason: string;
                lines: {
                    orderLineId: string;
                    quantity: number;
                    refundId: string;
                }[];
                paymentId: string;
            }[];
        }[];
        totalQuantity: number;
        subTotal: number;
        subTotalWithTax: number;
        shippingLines: {
            id: string;
            price: number;
            priceWithTax: number;
            shippingMethod: {
                id: string;
                name: string;
                description: string;
                code: string;
            };
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shippingWithTax: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
        shippingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
        billingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
    } | null;
}, false>;
export declare const AddItemToOrderSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    addItemToOrder: {
        id: string;
        createdAt: Date;
        type: string;
        code: string;
        currencyCode: string;
        shipping: number;
        total: number;
        state: string;
        lines: {
            id: string;
            taxRate: number;
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
            quantity: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            orderPlacedQuantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                type: string;
                description: string;
                amount: number;
                adjustmentSource: string;
                amountWithTax: number;
            }[];
            productVariant?: {
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
            } | undefined;
        }[];
        discounts: {
            type: string;
            description: string;
            amount: number;
            adjustmentSource: string;
            amountWithTax: number;
        }[];
        orderPlacedAt: Date | null;
        active: boolean;
        customer: {
            id: string;
            customFields: {
                subscribedUntil: Date | null;
            };
            phoneNumber: string;
            title: string;
            firstName: string;
            lastName: string;
            emailAddress: string;
            addresses: {
                id: string;
                fullName: string;
                company: string;
                streetLine1: string;
                streetLine2: string;
                city: string;
                province: string;
                postalCode: string;
                country: {
                    id: string;
                    name: string;
                    enabled: boolean;
                    code: string;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
        } | null;
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            taxRate: number;
            sku: string;
            price: number;
            priceWithTax: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            enabled: boolean;
            startsAt: Date | null;
            endsAt: Date | null;
            couponCode: string;
            perCustomerUsageLimit: number | null;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            state: string;
            transactionId: string;
            amount: number;
            errorMessage: string | null;
            refunds: {
                id: string;
                createdAt: Date;
                items: number;
                shipping: number;
                adjustment: number;
                total: number;
                method: string;
                state: string;
                transactionId: string;
                reason: string;
                lines: {
                    orderLineId: string;
                    quantity: number;
                    refundId: string;
                }[];
                paymentId: string;
            }[];
        }[];
        totalQuantity: number;
        subTotal: number;
        subTotalWithTax: number;
        shippingLines: {
            id: string;
            price: number;
            priceWithTax: number;
            shippingMethod: {
                id: string;
                name: string;
                description: string;
                code: string;
            };
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shippingWithTax: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
        shippingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
        billingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
    } | null;
}, false>;
export declare const AdjustOrderLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    adjustOrderLine: {
        id: string;
        createdAt: Date;
        type: string;
        code: string;
        currencyCode: string;
        shipping: number;
        total: number;
        state: string;
        lines: {
            id: string;
            taxRate: number;
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
            quantity: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            orderPlacedQuantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                type: string;
                description: string;
                amount: number;
                adjustmentSource: string;
                amountWithTax: number;
            }[];
            productVariant?: {
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
            } | undefined;
        }[];
        discounts: {
            type: string;
            description: string;
            amount: number;
            adjustmentSource: string;
            amountWithTax: number;
        }[];
        orderPlacedAt: Date | null;
        active: boolean;
        customer: {
            id: string;
            customFields: {
                subscribedUntil: Date | null;
            };
            phoneNumber: string;
            title: string;
            firstName: string;
            lastName: string;
            emailAddress: string;
            addresses: {
                id: string;
                fullName: string;
                company: string;
                streetLine1: string;
                streetLine2: string;
                city: string;
                province: string;
                postalCode: string;
                country: {
                    id: string;
                    name: string;
                    enabled: boolean;
                    code: string;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
        } | null;
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            taxRate: number;
            sku: string;
            price: number;
            priceWithTax: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            enabled: boolean;
            startsAt: Date | null;
            endsAt: Date | null;
            couponCode: string;
            perCustomerUsageLimit: number | null;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            state: string;
            transactionId: string;
            amount: number;
            errorMessage: string | null;
            refunds: {
                id: string;
                createdAt: Date;
                items: number;
                shipping: number;
                adjustment: number;
                total: number;
                method: string;
                state: string;
                transactionId: string;
                reason: string;
                lines: {
                    orderLineId: string;
                    quantity: number;
                    refundId: string;
                }[];
                paymentId: string;
            }[];
        }[];
        totalQuantity: number;
        subTotal: number;
        subTotalWithTax: number;
        shippingLines: {
            id: string;
            price: number;
            priceWithTax: number;
            shippingMethod: {
                id: string;
                name: string;
                description: string;
                code: string;
            };
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shippingWithTax: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
        shippingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
        billingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
    } | null;
}, false>;
export declare const RemoveOrderLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    removeOrderLine: {
        id: string;
        createdAt: Date;
        type: string;
        code: string;
        currencyCode: string;
        shipping: number;
        total: number;
        state: string;
        lines: {
            id: string;
            taxRate: number;
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
            quantity: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            orderPlacedQuantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                type: string;
                description: string;
                amount: number;
                adjustmentSource: string;
                amountWithTax: number;
            }[];
            productVariant?: {
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
            } | undefined;
        }[];
        discounts: {
            type: string;
            description: string;
            amount: number;
            adjustmentSource: string;
            amountWithTax: number;
        }[];
        orderPlacedAt: Date | null;
        active: boolean;
        customer: {
            id: string;
            customFields: {
                subscribedUntil: Date | null;
            };
            phoneNumber: string;
            title: string;
            firstName: string;
            lastName: string;
            emailAddress: string;
            addresses: {
                id: string;
                fullName: string;
                company: string;
                streetLine1: string;
                streetLine2: string;
                city: string;
                province: string;
                postalCode: string;
                country: {
                    id: string;
                    name: string;
                    enabled: boolean;
                    code: string;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
        } | null;
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            taxRate: number;
            sku: string;
            price: number;
            priceWithTax: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            enabled: boolean;
            startsAt: Date | null;
            endsAt: Date | null;
            couponCode: string;
            perCustomerUsageLimit: number | null;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            state: string;
            transactionId: string;
            amount: number;
            errorMessage: string | null;
            refunds: {
                id: string;
                createdAt: Date;
                items: number;
                shipping: number;
                adjustment: number;
                total: number;
                method: string;
                state: string;
                transactionId: string;
                reason: string;
                lines: {
                    orderLineId: string;
                    quantity: number;
                    refundId: string;
                }[];
                paymentId: string;
            }[];
        }[];
        totalQuantity: number;
        subTotal: number;
        subTotalWithTax: number;
        shippingLines: {
            id: string;
            price: number;
            priceWithTax: number;
            shippingMethod: {
                id: string;
                name: string;
                description: string;
                code: string;
            };
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shippingWithTax: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
        shippingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
        billingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
    } | null;
}, false>;
export declare const TransitionOrderToStateSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    transitionOrderToState: {
        id: string;
        createdAt: Date;
        type: string;
        code: string;
        currencyCode: string;
        shipping: number;
        total: number;
        state: string;
        lines: {
            id: string;
            taxRate: number;
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
            quantity: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            orderPlacedQuantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                type: string;
                description: string;
                amount: number;
                adjustmentSource: string;
                amountWithTax: number;
            }[];
            productVariant?: {
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
            } | undefined;
        }[];
        discounts: {
            type: string;
            description: string;
            amount: number;
            adjustmentSource: string;
            amountWithTax: number;
        }[];
        orderPlacedAt: Date | null;
        active: boolean;
        customer: {
            id: string;
            customFields: {
                subscribedUntil: Date | null;
            };
            phoneNumber: string;
            title: string;
            firstName: string;
            lastName: string;
            emailAddress: string;
            addresses: {
                id: string;
                fullName: string;
                company: string;
                streetLine1: string;
                streetLine2: string;
                city: string;
                province: string;
                postalCode: string;
                country: {
                    id: string;
                    name: string;
                    enabled: boolean;
                    code: string;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
        } | null;
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            taxRate: number;
            sku: string;
            price: number;
            priceWithTax: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            enabled: boolean;
            startsAt: Date | null;
            endsAt: Date | null;
            couponCode: string;
            perCustomerUsageLimit: number | null;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            state: string;
            transactionId: string;
            amount: number;
            errorMessage: string | null;
            refunds: {
                id: string;
                createdAt: Date;
                items: number;
                shipping: number;
                adjustment: number;
                total: number;
                method: string;
                state: string;
                transactionId: string;
                reason: string;
                lines: {
                    orderLineId: string;
                    quantity: number;
                    refundId: string;
                }[];
                paymentId: string;
            }[];
        }[];
        totalQuantity: number;
        subTotal: number;
        subTotalWithTax: number;
        shippingLines: {
            id: string;
            price: number;
            priceWithTax: number;
            shippingMethod: {
                id: string;
                name: string;
                description: string;
                code: string;
            };
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shippingWithTax: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
        shippingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
        billingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
    } | null;
}, false>;
export declare const ApplyCouponCodeSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    applyCouponCode: {
        id: string;
        createdAt: Date;
        type: string;
        code: string;
        currencyCode: string;
        shipping: number;
        total: number;
        state: string;
        lines: {
            id: string;
            taxRate: number;
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
            quantity: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            orderPlacedQuantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                type: string;
                description: string;
                amount: number;
                adjustmentSource: string;
                amountWithTax: number;
            }[];
            productVariant?: {
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
            } | undefined;
        }[];
        discounts: {
            type: string;
            description: string;
            amount: number;
            adjustmentSource: string;
            amountWithTax: number;
        }[];
        orderPlacedAt: Date | null;
        active: boolean;
        customer: {
            id: string;
            customFields: {
                subscribedUntil: Date | null;
            };
            phoneNumber: string;
            title: string;
            firstName: string;
            lastName: string;
            emailAddress: string;
            addresses: {
                id: string;
                fullName: string;
                company: string;
                streetLine1: string;
                streetLine2: string;
                city: string;
                province: string;
                postalCode: string;
                country: {
                    id: string;
                    name: string;
                    enabled: boolean;
                    code: string;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
        } | null;
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            taxRate: number;
            sku: string;
            price: number;
            priceWithTax: number;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            enabled: boolean;
            startsAt: Date | null;
            endsAt: Date | null;
            couponCode: string;
            perCustomerUsageLimit: number | null;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            state: string;
            transactionId: string;
            amount: number;
            errorMessage: string | null;
            refunds: {
                id: string;
                createdAt: Date;
                items: number;
                shipping: number;
                adjustment: number;
                total: number;
                method: string;
                state: string;
                transactionId: string;
                reason: string;
                lines: {
                    orderLineId: string;
                    quantity: number;
                    refundId: string;
                }[];
                paymentId: string;
            }[];
        }[];
        totalQuantity: number;
        subTotal: number;
        subTotalWithTax: number;
        shippingLines: {
            id: string;
            price: number;
            priceWithTax: number;
            shippingMethod: {
                id: string;
                name: string;
                description: string;
                code: string;
            };
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shippingWithTax: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
        shippingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
        billingAddress?: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            phoneNumber: string | null;
            countryCode: string | null;
        } | undefined;
    } | null;
}, false>;
