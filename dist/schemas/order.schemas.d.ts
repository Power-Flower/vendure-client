export declare const PromotionSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    startsAt: Date;
    endsAt: Date;
    couponCode: string;
    perCustomerUsageLimit: number;
    name: string;
    description: string;
    enabled: boolean;
}, false>;
export declare const SurchargeSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    description: string;
    sku: string;
    taxLines: {
        description: string;
        taxRate: number;
    }[];
    price: number;
    priceWithTax: number;
    taxRate: number;
}, false>;
export declare const DiscountSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    adjustmentSource: string;
    type: string;
    description: string;
    amount: number;
    amountWithTax: number;
}, false>;
export declare const OrderLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    productVariant: {
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
    } | undefined;
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
    unitPrice: number;
    unitPriceWithTax: number;
    discountedUnitPrice: number;
    discountedUnitPriceWithTax: number;
    quantity: number;
    orderPlacedQuantity: number;
    taxRate: number;
    linePrice: number;
    linePriceWithTax: number;
    discountedLinePrice: number;
    discountedLinePriceWithTax: number;
    proratedLinePrice: number;
    proratedLinePriceWithTax: number;
    lineTax: number;
    discounts: {
        adjustmentSource: string;
        type: string;
        description: string;
        amount: number;
        amountWithTax: number;
    }[];
    taxLines: {
        description: string;
        taxRate: number;
    }[];
}, false>;
export declare const ShippingMethodSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    code: string;
    name: string;
    description: string;
}, false>;
export declare const ShippingLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    shippingMethod: {
        id: string;
        code: string;
        name: string;
        description: string;
    };
    price: number;
    priceWithTax: number;
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
    countryCode: string | null;
    phoneNumber: string | null;
}, false>;
export declare const OrderSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    type: string;
    orderPlacedAt: Date | null;
    code: string;
    state: string;
    active: boolean;
    customer: {
        id: string;
        title: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
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
                code: string;
                name: string;
                enabled: boolean;
            };
            phoneNumber: string;
            defaultShippingAddress: boolean;
            defaultBillingAddress: boolean;
        }[];
        customFields: {
            subscribedUntil: Date | null;
        };
    } | undefined;
    shippingAddress: {
        fullName: string | null;
        company: string | null;
        streetLine1: string | null;
        streetLine2: string | null;
        city: string | null;
        province: string | null;
        postalCode: string | null;
        country: string | null;
        countryCode: string | null;
        phoneNumber: string | null;
    } | undefined;
    billingAddress: {
        fullName: string | null;
        company: string | null;
        streetLine1: string | null;
        streetLine2: string | null;
        city: string | null;
        province: string | null;
        postalCode: string | null;
        country: string | null;
        countryCode: string | null;
        phoneNumber: string | null;
    } | undefined;
    lines: {
        id: string;
        productVariant: {
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
        } | undefined;
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
        unitPrice: number;
        unitPriceWithTax: number;
        discountedUnitPrice: number;
        discountedUnitPriceWithTax: number;
        quantity: number;
        orderPlacedQuantity: number;
        taxRate: number;
        linePrice: number;
        linePriceWithTax: number;
        discountedLinePrice: number;
        discountedLinePriceWithTax: number;
        proratedLinePrice: number;
        proratedLinePriceWithTax: number;
        lineTax: number;
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        taxLines: {
            description: string;
            taxRate: number;
        }[];
    }[];
    surcharges: {
        id: string;
        createdAt: Date;
        description: string;
        sku: string;
        taxLines: {
            description: string;
            taxRate: number;
        }[];
        price: number;
        priceWithTax: number;
        taxRate: number;
    }[];
    discounts: {
        adjustmentSource: string;
        type: string;
        description: string;
        amount: number;
        amountWithTax: number;
    }[];
    couponCodes: string[];
    promotions: {
        id: string;
        createdAt: Date;
        startsAt: Date;
        endsAt: Date;
        couponCode: string;
        perCustomerUsageLimit: number;
        name: string;
        description: string;
        enabled: boolean;
    }[];
    payments: {
        id: string;
        createdAt: Date;
        method: string;
        amount: number;
        state: string;
        transactionId: string;
        errorMessage: string;
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
    currencyCode: string;
    shippingLines: {
        id: string;
        shippingMethod: {
            id: string;
            code: string;
            name: string;
            description: string;
        };
        price: number;
        priceWithTax: number;
        discountedPrice: number;
        discountedPriceWithTax: number;
    }[];
    shipping: number;
    shippingWithTax: number;
    total: number;
    totalWithTax: number;
    taxSummary: {
        description: string;
        taxRate: number;
        taxBase: number;
        taxTotal: number;
    }[];
}, false>;
export declare const OrderListSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    items: {
        id: string;
        createdAt: Date;
        type: string;
        orderPlacedAt: Date | null;
        code: string;
        state: string;
        active: boolean;
        customer: {
            id: string;
            title: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
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
                    code: string;
                    name: string;
                    enabled: boolean;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
            customFields: {
                subscribedUntil: Date | null;
            };
        } | undefined;
        shippingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        billingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
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
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            orderPlacedQuantity: number;
            taxRate: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            sku: string;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            price: number;
            priceWithTax: number;
            taxRate: number;
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            startsAt: Date;
            endsAt: Date;
            couponCode: string;
            perCustomerUsageLimit: number;
            name: string;
            description: string;
            enabled: boolean;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            amount: number;
            state: string;
            transactionId: string;
            errorMessage: string;
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
        currencyCode: string;
        shippingLines: {
            id: string;
            shippingMethod: {
                id: string;
                code: string;
                name: string;
                description: string;
            };
            price: number;
            priceWithTax: number;
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
    }[];
    totalItems: number;
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
        orderPlacedAt: Date | null;
        code: string;
        state: string;
        active: boolean;
        customer: {
            id: string;
            title: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
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
                    code: string;
                    name: string;
                    enabled: boolean;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
            customFields: {
                subscribedUntil: Date | null;
            };
        } | undefined;
        shippingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        billingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
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
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            orderPlacedQuantity: number;
            taxRate: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            sku: string;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            price: number;
            priceWithTax: number;
            taxRate: number;
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            startsAt: Date;
            endsAt: Date;
            couponCode: string;
            perCustomerUsageLimit: number;
            name: string;
            description: string;
            enabled: boolean;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            amount: number;
            state: string;
            transactionId: string;
            errorMessage: string;
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
        currencyCode: string;
        shippingLines: {
            id: string;
            shippingMethod: {
                id: string;
                code: string;
                name: string;
                description: string;
            };
            price: number;
            priceWithTax: number;
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
    } | null;
}, false>;
export declare const AddItemToOrderSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    addItemToOrder: {
        id: string;
        createdAt: Date;
        type: string;
        orderPlacedAt: Date | null;
        code: string;
        state: string;
        active: boolean;
        customer: {
            id: string;
            title: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
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
                    code: string;
                    name: string;
                    enabled: boolean;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
            customFields: {
                subscribedUntil: Date | null;
            };
        } | undefined;
        shippingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        billingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
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
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            orderPlacedQuantity: number;
            taxRate: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            sku: string;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            price: number;
            priceWithTax: number;
            taxRate: number;
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            startsAt: Date;
            endsAt: Date;
            couponCode: string;
            perCustomerUsageLimit: number;
            name: string;
            description: string;
            enabled: boolean;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            amount: number;
            state: string;
            transactionId: string;
            errorMessage: string;
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
        currencyCode: string;
        shippingLines: {
            id: string;
            shippingMethod: {
                id: string;
                code: string;
                name: string;
                description: string;
            };
            price: number;
            priceWithTax: number;
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
    } | null;
}, false>;
export declare const AdjustOrderLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    adjustOrderLine: {
        id: string;
        createdAt: Date;
        type: string;
        orderPlacedAt: Date | null;
        code: string;
        state: string;
        active: boolean;
        customer: {
            id: string;
            title: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
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
                    code: string;
                    name: string;
                    enabled: boolean;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
            customFields: {
                subscribedUntil: Date | null;
            };
        } | undefined;
        shippingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        billingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
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
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            orderPlacedQuantity: number;
            taxRate: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            sku: string;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            price: number;
            priceWithTax: number;
            taxRate: number;
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            startsAt: Date;
            endsAt: Date;
            couponCode: string;
            perCustomerUsageLimit: number;
            name: string;
            description: string;
            enabled: boolean;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            amount: number;
            state: string;
            transactionId: string;
            errorMessage: string;
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
        currencyCode: string;
        shippingLines: {
            id: string;
            shippingMethod: {
                id: string;
                code: string;
                name: string;
                description: string;
            };
            price: number;
            priceWithTax: number;
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
    } | null;
}, false>;
export declare const RemoveOrderLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    removeOrderLine: {
        id: string;
        createdAt: Date;
        type: string;
        orderPlacedAt: Date | null;
        code: string;
        state: string;
        active: boolean;
        customer: {
            id: string;
            title: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
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
                    code: string;
                    name: string;
                    enabled: boolean;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
            customFields: {
                subscribedUntil: Date | null;
            };
        } | undefined;
        shippingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        billingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
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
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            orderPlacedQuantity: number;
            taxRate: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            sku: string;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            price: number;
            priceWithTax: number;
            taxRate: number;
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            startsAt: Date;
            endsAt: Date;
            couponCode: string;
            perCustomerUsageLimit: number;
            name: string;
            description: string;
            enabled: boolean;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            amount: number;
            state: string;
            transactionId: string;
            errorMessage: string;
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
        currencyCode: string;
        shippingLines: {
            id: string;
            shippingMethod: {
                id: string;
                code: string;
                name: string;
                description: string;
            };
            price: number;
            priceWithTax: number;
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
    } | null;
}, false>;
export declare const TransitionOrderToStateSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    transitionOrderToState: {
        id: string;
        createdAt: Date;
        type: string;
        orderPlacedAt: Date | null;
        code: string;
        state: string;
        active: boolean;
        customer: {
            id: string;
            title: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
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
                    code: string;
                    name: string;
                    enabled: boolean;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
            customFields: {
                subscribedUntil: Date | null;
            };
        } | undefined;
        shippingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        billingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
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
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            orderPlacedQuantity: number;
            taxRate: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            sku: string;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            price: number;
            priceWithTax: number;
            taxRate: number;
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            startsAt: Date;
            endsAt: Date;
            couponCode: string;
            perCustomerUsageLimit: number;
            name: string;
            description: string;
            enabled: boolean;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            amount: number;
            state: string;
            transactionId: string;
            errorMessage: string;
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
        currencyCode: string;
        shippingLines: {
            id: string;
            shippingMethod: {
                id: string;
                code: string;
                name: string;
                description: string;
            };
            price: number;
            priceWithTax: number;
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
    } | null;
}, false>;
export declare const ApplyCouponCodeSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    applyCouponCode: {
        id: string;
        createdAt: Date;
        type: string;
        orderPlacedAt: Date | null;
        code: string;
        state: string;
        active: boolean;
        customer: {
            id: string;
            title: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
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
                    code: string;
                    name: string;
                    enabled: boolean;
                };
                phoneNumber: string;
                defaultShippingAddress: boolean;
                defaultBillingAddress: boolean;
            }[];
            customFields: {
                subscribedUntil: Date | null;
            };
        } | undefined;
        shippingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        billingAddress: {
            fullName: string | null;
            company: string | null;
            streetLine1: string | null;
            streetLine2: string | null;
            city: string | null;
            province: string | null;
            postalCode: string | null;
            country: string | null;
            countryCode: string | null;
            phoneNumber: string | null;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
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
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            orderPlacedQuantity: number;
            taxRate: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            proratedLinePrice: number;
            proratedLinePriceWithTax: number;
            lineTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
            taxLines: {
                description: string;
                taxRate: number;
            }[];
        }[];
        surcharges: {
            id: string;
            createdAt: Date;
            description: string;
            sku: string;
            taxLines: {
                description: string;
                taxRate: number;
            }[];
            price: number;
            priceWithTax: number;
            taxRate: number;
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
        promotions: {
            id: string;
            createdAt: Date;
            startsAt: Date;
            endsAt: Date;
            couponCode: string;
            perCustomerUsageLimit: number;
            name: string;
            description: string;
            enabled: boolean;
        }[];
        payments: {
            id: string;
            createdAt: Date;
            method: string;
            amount: number;
            state: string;
            transactionId: string;
            errorMessage: string;
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
        currencyCode: string;
        shippingLines: {
            id: string;
            shippingMethod: {
                id: string;
                code: string;
                name: string;
                description: string;
            };
            price: number;
            priceWithTax: number;
            discountedPrice: number;
            discountedPriceWithTax: number;
        }[];
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        taxSummary: {
            description: string;
            taxRate: number;
            taxBase: number;
            taxTotal: number;
        }[];
    } | null;
}, false>;
