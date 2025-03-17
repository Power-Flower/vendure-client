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
    } | undefined;
    featuredAsset: {
        id: string;
        name: string;
        type: string;
        source: string;
    };
    unitPrice: number;
    unitPriceWithTax: number;
    discountedUnitPrice: number;
    discountedUnitPriceWithTax: number;
    quantity: number;
    linePrice: number;
    linePriceWithTax: number;
    discountedLinePrice: number;
    discountedLinePriceWithTax: number;
    discounts: {
        adjustmentSource: string;
        type: string;
        description: string;
        amount: number;
        amountWithTax: number;
    }[];
}, false>;
export declare const ShippingMethod: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
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
    fullName: string;
    company: string;
    streetLine1: string;
    streetLine2: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    countryCode: string;
    phoneNumber: string;
}, false>;
export declare const OrderSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    orderPlacedAt: Date;
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
        fullName: string;
        company: string;
        streetLine1: string;
        streetLine2: string;
        city: string;
        province: string;
        postalCode: string;
        country: string;
        countryCode: string;
        phoneNumber: string;
    } | undefined;
    billingAddress: {
        fullName: string;
        company: string;
        streetLine1: string;
        streetLine2: string;
        city: string;
        province: string;
        postalCode: string;
        country: string;
        countryCode: string;
        phoneNumber: string;
    } | undefined;
    lines: {
        id: string;
        productVariant: {
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
        } | undefined;
        featuredAsset: {
            id: string;
            name: string;
            type: string;
            source: string;
        };
        unitPrice: number;
        unitPriceWithTax: number;
        discountedUnitPrice: number;
        discountedUnitPriceWithTax: number;
        quantity: number;
        linePrice: number;
        linePriceWithTax: number;
        discountedLinePrice: number;
        discountedLinePriceWithTax: number;
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
    }[];
    discounts: {
        adjustmentSource: string;
        type: string;
        description: string;
        amount: number;
        amountWithTax: number;
    }[];
    couponCodes: string[];
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
}, false>;
export declare const OrderListSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    items: {
        id: string;
        createdAt: Date;
        orderPlacedAt: Date;
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
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        billingAddress: {
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
            featuredAsset: {
                id: string;
                name: string;
                type: string;
                source: string;
            };
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
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
        orderPlacedAt: Date;
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
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        billingAddress: {
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
            featuredAsset: {
                id: string;
                name: string;
                type: string;
                source: string;
            };
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
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
    } | undefined;
}, false>;
export declare const AddToActiveOrderSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    addToActiveOrder: {
        id: string;
        createdAt: Date;
        orderPlacedAt: Date;
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
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        billingAddress: {
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
            featuredAsset: {
                id: string;
                name: string;
                type: string;
                source: string;
            };
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
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
    } | undefined;
}, false>;
export declare const AdjustOrderLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    adjustOrderLine: {
        id: string;
        createdAt: Date;
        orderPlacedAt: Date;
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
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        billingAddress: {
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
            featuredAsset: {
                id: string;
                name: string;
                type: string;
                source: string;
            };
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
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
    } | undefined;
}, false>;
export declare const RemoveOrderLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    removeOrderLine: {
        id: string;
        createdAt: Date;
        orderPlacedAt: Date;
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
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        billingAddress: {
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: string;
            countryCode: string;
            phoneNumber: string;
        } | undefined;
        lines: {
            id: string;
            productVariant: {
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
            } | undefined;
            featuredAsset: {
                id: string;
                name: string;
                type: string;
                source: string;
            };
            unitPrice: number;
            unitPriceWithTax: number;
            discountedUnitPrice: number;
            discountedUnitPriceWithTax: number;
            quantity: number;
            linePrice: number;
            linePriceWithTax: number;
            discountedLinePrice: number;
            discountedLinePriceWithTax: number;
            discounts: {
                adjustmentSource: string;
                type: string;
                description: string;
                amount: number;
                amountWithTax: number;
            }[];
        }[];
        discounts: {
            adjustmentSource: string;
            type: string;
            description: string;
            amount: number;
            amountWithTax: number;
        }[];
        couponCodes: string[];
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
    } | undefined;
}, false>;
