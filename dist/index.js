import * as __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__ from "@arrirpc/schema";
import * as __WEBPACK_EXTERNAL_MODULE__apollo_client_core_core_cjs_912e52f7__ from "@apollo/client/core/core.cjs";
import * as __WEBPACK_EXTERNAL_MODULE__apollo_client_link_core_core_cjs_d0cfd889__ from "@apollo/client/link/core/core.cjs";
import * as __WEBPACK_EXTERNAL_MODULE__apollo_client_link_http_http_cjs_d7af7894__ from "@apollo/client/link/http/http.cjs";
var __webpack_modules__ = {
    "./src/types/astro.types.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _apollo_client_core_core_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@apollo/client/core/core.cjs");
        var __WEBPACK_REEXPORT_OBJECT__ = {};
        for(var __WEBPACK_IMPORT_KEY__ in _apollo_client_core_core_cjs__WEBPACK_IMPORTED_MODULE_0__)if ("default" !== __WEBPACK_IMPORT_KEY__) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = (function(key) {
            return _apollo_client_core_core_cjs__WEBPACK_IMPORTED_MODULE_0__[key];
        }).bind(0, __WEBPACK_IMPORT_KEY__);
        __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
        var _apollo_client_link_core_core_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@apollo/client/link/core/core.cjs");
        var __WEBPACK_REEXPORT_OBJECT__ = {};
        for(var __WEBPACK_IMPORT_KEY__ in _apollo_client_link_core_core_cjs__WEBPACK_IMPORTED_MODULE_1__)if ("default" !== __WEBPACK_IMPORT_KEY__) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = (function(key) {
            return _apollo_client_link_core_core_cjs__WEBPACK_IMPORTED_MODULE_1__[key];
        }).bind(0, __WEBPACK_IMPORT_KEY__);
        __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
        var _apollo_client_link_http_http_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@apollo/client/link/http/http.cjs");
        var __WEBPACK_REEXPORT_OBJECT__ = {};
        for(var __WEBPACK_IMPORT_KEY__ in _apollo_client_link_http_http_cjs__WEBPACK_IMPORTED_MODULE_2__)if ("default" !== __WEBPACK_IMPORT_KEY__) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = (function(key) {
            return _apollo_client_link_http_http_cjs__WEBPACK_IMPORTED_MODULE_2__[key];
        }).bind(0, __WEBPACK_IMPORT_KEY__);
        __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
    },
    "./src/types/index.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _astro_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/types/astro.types.ts");
        var __WEBPACK_REEXPORT_OBJECT__ = {};
        for(var __WEBPACK_IMPORT_KEY__ in _astro_types__WEBPACK_IMPORTED_MODULE_0__)if ("default" !== __WEBPACK_IMPORT_KEY__) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = (function(key) {
            return _astro_types__WEBPACK_IMPORTED_MODULE_0__[key];
        }).bind(0, __WEBPACK_IMPORT_KEY__);
        __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
        __webpack_require__("./src/types/result.types.ts");
        __webpack_require__("./src/types/vendure-client.types.ts");
    },
    "./src/types/result.types.ts": function() {},
    "./src/types/vendure-client.types.ts": function() {},
    "./src/vendure-client.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, {
            V: ()=>VendureClient
        });
        const AuthLoginSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            login: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                identifier: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
            })
        });
        const AuthRegisterSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            registerCustomerAccount: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                success: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.boolean()
            })
        });
        var types = __webpack_require__("./src/types/index.ts");
        function _define_property(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            else obj[key] = value;
            return obj;
        }
        class BaseService {
            constructor(client){
                _define_property(this, "client", void 0);
                this.client = client;
            }
        }
        class Auth extends BaseService {
            async login(email, password) {
                const response = await this.client.mutate({
                    mutation: (0, types.gql)`
                mutation($email: String!, $password: String!) {
                    login(username: $email, password: $password, rememberMe: true) {
                        ... on CurrentUser {
                            id
                            identifier
                        }
                        ... on ErrorResult {
                            errorCode
                            message
                        }
                    }
                }
            `,
                    variables: {
                        email,
                        password
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(AuthLoginSchema, response.data);
            }
            async register(firstName, lastName, email, password) {
                const response = await this.client.mutate({
                    mutation: (0, types.gql)`
                mutation($input: RegisterCustomerInput!) {
                    registerCustomerAccount(input: $input) {
                        ... on Success {
                            success
                        }
                        ... on ErrorResult {
                            errorCode
                            message
                        }
                    }
                }
            `,
                    variables: {
                        input: {
                            firstName,
                            lastName,
                            email,
                            password
                        }
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(AuthRegisterSchema, response.data);
            }
        }
        const CountrySchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            enabled: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.boolean()
        });
        const AddressSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            fullName: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            company: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            streetLine1: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            streetLine2: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            city: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            province: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            postalCode: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            country: CountrySchema,
            phoneNumber: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            defaultShippingAddress: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.boolean(),
            defaultBillingAddress: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.boolean()
        });
        const CustomerSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            title: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            firstName: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            lastName: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            phoneNumber: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            emailAddress: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            addresses: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(AddressSchema),
            customFields: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                subscribedUntil: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.nullable(__WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.timestamp())
            })
        });
        const GetActiveCustomerSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            activeCustomer: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.nullable(CustomerSchema)
        });
        const CreateCustomerAddressSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            createCustomerAddress: AddressSchema
        });
        const UpdateCustomerAddressSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            updateCustomerAddress: AddressSchema
        });
        const DeleteCustomerAddressSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            deleteCustomerAddress: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                success: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.boolean()
            })
        });
        const convertToGql = (schema)=>{
            let object = schema.properties;
            if ('optionalProperties' in schema) object = {
                ...object,
                ...schema.optionalProperties
            };
            if ('elements' in schema) object = {
                ...object,
                ...schema.elements.properties
            };
            const props = Object.entries(object).map((param)=>{
                let [key, value] = param;
                if ('object' != typeof value) return key;
                if ('properties' in value || 'elements' in value || 'optionalProperties' in value) {
                    if (value.elements && !(value.elements.properties || value.elements.optionalProperties)) return key;
                    return `${key} {\n${convertToGql(value)}\n}`;
                }
                return key;
            }).join('\n');
            return props;
        };
        class Customer extends BaseService {
            async getActiveCustomer() {
                const response = await this.client.query({
                    query: (0, types.gql)`
                query GetActiveCustomer {
                    ${convertToGql(GetActiveCustomerSchema)}
                }
            `
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(GetActiveCustomerSchema, response.data);
            }
            async createCustomerAddress(input) {
                const response = await this.client.mutate({
                    mutation: (0, types.gql)`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        id
                        fullName
                        company
                        streetLine1
                        streetLine2
                        city
                        province
                        postalCode
                        country {
                            id
                            code
                            name
                            enabled
                        }
                        phoneNumber
                        defaultShippingAddress
                        defaultBillingAddress
                   }
                }
            `,
                    variables: {
                        input: {
                            fullName: input.fullName,
                            company: input.company,
                            streetLine1: input.streetLine1,
                            streetLine2: input.streetLine2,
                            city: input.city,
                            province: input.province,
                            postalCode: input.postalCode,
                            countryCode: input.country.code,
                            phoneNumber: input.phoneNumber,
                            defaultShippingAddress: input.defaultShippingAddress,
                            defaultBillingAddress: input.defaultBillingAddress
                        }
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(CreateCustomerAddressSchema, response.data);
            }
            async updateCustomerAddress(input) {
                const response = await this.client.mutate({
                    mutation: (0, types.gql)`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        id
                        fullName
                        company
                        streetLine1
                        streetLine2
                        city
                        province
                        postalCode
                        country {
                            id
                            code
                            name
                            enabled
                        }
                        phoneNumber
                        defaultShippingAddress
                        defaultBillingAddress
                   }
                }
            `,
                    variables: {
                        input: {
                            id: input.id,
                            fullName: input.fullName,
                            company: input.company,
                            streetLine1: input.streetLine1,
                            streetLine2: input.streetLine2,
                            city: input.city,
                            province: input.province,
                            postalCode: input.postalCode,
                            countryCode: input.country.code,
                            phoneNumber: input.phoneNumber,
                            defaultShippingAddress: input.defaultShippingAddress,
                            defaultBillingAddress: input.defaultBillingAddress
                        }
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(UpdateCustomerAddressSchema, response.data);
            }
            async deleteCustomerAddress(id) {
                const response = await this.client.mutate({
                    mutation: (0, types.gql)`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,
                    variables: {
                        id
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(DeleteCustomerAddressSchema, response.data);
            }
        }
        const AssetSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            type: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            source: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
        });
        const FacetValueSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            facet: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(__WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
            })),
            facetId: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
        });
        __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            values: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(__WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                facetId: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
            }))
        });
        const ProductOptionSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            groupId: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            group: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
            })
        });
        __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            options: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(__WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                groupId: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
            }))
        });
        __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            slug: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            description: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            featuredAsset: AssetSchema,
            assets: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(AssetSchema),
            facetValues: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(FacetValueSchema),
            customFields: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                location: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
                date: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.timestamp()
            })
        });
        const ProductVariantSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            productId: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            sku: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            featuredAsset: AssetSchema,
            assets: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(AssetSchema),
            price: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            currencyCode: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            priceWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            stockLevel: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            options: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(ProductOptionSchema),
            facetValues: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(FacetValueSchema)
        });
        const DiscountSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            adjustmentSource: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            type: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            description: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            amount: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            amountWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number()
        });
        const OrderLineSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            productVariant: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(ProductVariantSchema),
            featuredAsset: AssetSchema,
            unitPrice: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            unitPriceWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            discountedUnitPrice: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            discountedUnitPriceWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            quantity: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            linePrice: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            linePriceWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            discountedLinePrice: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            discountedLinePriceWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            discounts: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(DiscountSchema)
        });
        const ShippingMethod = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            name: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            description: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
        });
        const ShippingLineSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            shippingMethod: ShippingMethod,
            price: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            priceWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            discountedPrice: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            discountedPriceWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number()
        });
        const OrderAddressSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            fullName: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            company: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            streetLine1: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            streetLine2: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            city: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            province: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            postalCode: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            country: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            countryCode: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            phoneNumber: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
        });
        const OrderSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            id: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            createdAt: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.timestamp(),
            orderPlacedAt: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.timestamp(),
            code: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            state: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            active: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.boolean(),
            customer: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(CustomerSchema),
            shippingAddress: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(OrderAddressSchema),
            billingAddress: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(OrderAddressSchema),
            lines: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(OrderLineSchema),
            discounts: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(DiscountSchema),
            couponCodes: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(__WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()),
            totalQuantity: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            subTotal: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            subTotalWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            currencyCode: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string(),
            shippingLines: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(ShippingLineSchema),
            shipping: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            shippingWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            total: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number(),
            totalWithTax: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number()
        });
        __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            items: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.array(OrderSchema),
            totalItems: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.number()
        });
        const OrderByCodeSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            orderByCode: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
                state: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.string()
            })
        });
        const ActiveOrderSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            activeOrder: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(OrderSchema)
        });
        const AddToActiveOrderSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            addToActiveOrder: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(OrderSchema)
        });
        const AdjustOrderLineSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            adjustOrderLine: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(OrderSchema)
        });
        const RemoveOrderLineSchema = __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.object({
            removeOrderLine: __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.optional(OrderSchema)
        });
        class Order extends BaseService {
            async getByCode(code) {
                const response = await this.client.query({
                    query: (0, types.gql)`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        state
                    }
                }
            `,
                    variables: {
                        code
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(OrderByCodeSchema, response.data);
            }
            async getActiveOrder() {
                const response = await this.client.query({
                    query: (0, types.gql)`
                query GetActiveOrder {
                    activeOrder {
                        id
                        createdAt
                        orderPlacedAt
                        code
                        state
                        active
                        shippingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        billingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        lines {
                            id
                            productVariant {
                                id
                                productId
                                sku
                                name
                                featuredAsset {
                                    id
                                    name
                                    type
                                    source
                                }
                                assets {
                                    id
                                    name
                                    type
                                    source
                                }
                                price
                                currencyCode
                                priceWithTax
                                stockLevel
                                options {
                                    id
                                    code
                                    name
                                    groupId
                                    group {
                                        id
                                        code
                                        name
                                    }
                                }
                                facetValues {
                                    id
                                    facet {
                                        id
                                        name
                                        code
                                    }
                                    facetId
                                    name
                                    code
                                }
                            }
                            featuredAsset {
                                id
                                name
                                type
                                source
                            }
                            unitPrice
                            unitPriceWithTax
                            discountedUnitPrice
                            discountedUnitPriceWithTax
                            quantity
                            linePrice
                            linePriceWithTax
                            discountedLinePrice
                            discountedLinePriceWithTax
                            discounts {
                                adjustmentSource
                                type
                                description
                                amount
                                amountWithTax
                            }
                        }
                        discounts {
                            adjustmentSource
                            type
                            description
                            amount
                            amountWithTax
                        }
                        couponCodes
                        totalQuantity
                        subTotal
                        subTotalWithTax
                        currencyCode
                        shippingLines {
                            id
                            shippingMethod {
                                id
                                code
                                name
                                description
                            }
                            price
                            priceWithTax
                            discountedPrice
                            discountedPriceWithTax
                        }
                        shipping
                        shippingWithTax
                        total
                        totalWithTax
                    }
                }
            `
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(ActiveOrderSchema, response.data);
            }
            async addToActiveOrder(productVariantId, quantity) {
                const response = await this.client.mutate({
                    mutation: (0, types.gql)`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        id
                        createdAt
                        orderPlacedAt
                        code
                        state
                        active
                        shippingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        billingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        lines {
                            id
                            productVariant {
                                id
                                productId
                                sku
                                name
                                featuredAsset {
                                    id
                                    name
                                    type
                                    source
                                }
                                assets {
                                    id
                                    name
                                    type
                                    source
                                }
                                price
                                currencyCode
                                priceWithTax
                                stockLevel
                                options {
                                    id
                                    code
                                    name
                                    groupId
                                    group {
                                        id
                                        code
                                        name
                                    }
                                }
                                facetValues {
                                    id
                                    facet {
                                        id
                                        name
                                        code
                                    }
                                    facetId
                                    name
                                    code
                                }
                            }
                            featuredAsset {
                                id
                                name
                                type
                                source
                            }
                            unitPrice
                            unitPriceWithTax
                            discountedUnitPrice
                            discountedUnitPriceWithTax
                            quantity
                            linePrice
                            linePriceWithTax
                            discountedLinePrice
                            discountedLinePriceWithTax
                            discounts {
                                adjustmentSource
                                type
                                description
                                amount
                                amountWithTax
                            }
                        }
                        discounts {
                            adjustmentSource
                            type
                            description
                            amount
                            amountWithTax
                        }
                        couponCodes
                        totalQuantity
                        subTotal
                        subTotalWithTax
                        currencyCode
                        shippingLines {
                            id
                            shippingMethod {
                                id
                                code
                                name
                                description
                            }
                            price
                            priceWithTax
                            discountedPrice
                            discountedPriceWithTax
                        }
                        shipping
                        shippingWithTax
                        total
                        totalWithTax
                    }
                }
            `,
                    variables: {
                        productVariantId,
                        quantity
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(AddToActiveOrderSchema, response.data);
            }
            async adjustOrderLine(orderLineId, quantity) {
                const response = await this.client.mutate({
                    mutation: (0, types.gql)`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        id
                        createdAt
                        orderPlacedAt
                        code
                        state
                        active
                        shippingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        billingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        lines {
                            id
                            productVariant {
                                id
                                productId
                                sku
                                name
                                featuredAsset {
                                    id
                                    name
                                    type
                                    source
                                }
                                assets {
                                    id
                                    name
                                    type
                                    source
                                }
                                price
                                currencyCode
                                priceWithTax
                                stockLevel
                                options {
                                    id
                                    code
                                    name
                                    groupId
                                    group {
                                        id
                                        code
                                        name
                                    }
                                }
                                facetValues {
                                    id
                                    facet {
                                        id
                                        name
                                        code
                                    }
                                    facetId
                                    name
                                    code
                                }
                            }
                            featuredAsset {
                                id
                                name
                                type
                                source
                            }
                            unitPrice
                            unitPriceWithTax
                            discountedUnitPrice
                            discountedUnitPriceWithTax
                            quantity
                            linePrice
                            linePriceWithTax
                            discountedLinePrice
                            discountedLinePriceWithTax
                            discounts {
                                adjustmentSource
                                type
                                description
                                amount
                                amountWithTax
                            }
                        }
                        discounts {
                            adjustmentSource
                            type
                            description
                            amount
                            amountWithTax
                        }
                        couponCodes
                        totalQuantity
                        subTotal
                        subTotalWithTax
                        currencyCode
                        shippingLines {
                            id
                            shippingMethod {
                                id
                                code
                                name
                                description
                            }
                            price
                            priceWithTax
                            discountedPrice
                            discountedPriceWithTax
                        }
                        shipping
                        shippingWithTax
                        total
                        totalWithTax
                    }
                }
            `,
                    variables: {
                        orderLineId,
                        quantity
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(AdjustOrderLineSchema, response.data);
            }
            async removeOrderLine(orderLineId) {
                const response = await this.client.mutate({
                    mutation: (0, types.gql)`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        id
                        createdAt
                        orderPlacedAt
                        code
                        state
                        active
                        shippingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        billingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        lines {
                            id
                            productVariant {
                                id
                                productId
                                sku
                                name
                                featuredAsset {
                                    id
                                    name
                                    type
                                    source
                                }
                                assets {
                                    id
                                    name
                                    type
                                    source
                                }
                                price
                                currencyCode
                                priceWithTax
                                stockLevel
                                options {
                                    id
                                    code
                                    name
                                    groupId
                                    group {
                                        id
                                        code
                                        name
                                    }
                                }
                                facetValues {
                                    id
                                    facet {
                                        id
                                        name
                                        code
                                    }
                                    facetId
                                    name
                                    code
                                }
                            }
                            featuredAsset {
                                id
                                name
                                type
                                source
                            }
                            unitPrice
                            unitPriceWithTax
                            discountedUnitPrice
                            discountedUnitPriceWithTax
                            quantity
                            linePrice
                            linePriceWithTax
                            discountedLinePrice
                            discountedLinePriceWithTax
                            discounts {
                                adjustmentSource
                                type
                                description
                                amount
                                amountWithTax
                            }
                        }
                        discounts {
                            adjustmentSource
                            type
                            description
                            amount
                            amountWithTax
                        }
                        couponCodes
                        totalQuantity
                        subTotal
                        subTotalWithTax
                        currencyCode
                        shippingLines {
                            id
                            shippingMethod {
                                id
                                code
                                name
                                description
                            }
                            price
                            priceWithTax
                            discountedPrice
                            discountedPriceWithTax
                        }
                        shipping
                        shippingWithTax
                        total
                        totalWithTax
                    }
                }
            `,
                    variables: {
                        orderLineId
                    }
                });
                return __WEBPACK_EXTERNAL_MODULE__arrirpc_schema_3870d9f8__.a.parse(RemoveOrderLineSchema, response.data);
            }
        }
        function vendure_client_define_property(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            else obj[key] = value;
            return obj;
        }
        class VendureClient {
            authHandler(operation, forward) {
                const token = this.getAuthToken();
                const authorizationHeader = token ? `Bearer ${token}` : null;
                operation.setContext({
                    headers: {
                        authorization: authorizationHeader
                    }
                });
                return forward(operation).map((response)=>{
                    const context = operation.getContext();
                    const { response: { headers } } = context;
                    const token = headers.get('vendure-auth-token');
                    this.saveAuthToken(token);
                    return response;
                });
            }
            getAuthToken() {
                if ('undefined' != typeof localStorage) return localStorage.getItem('vendure-auth-token');
                return null;
            }
            saveAuthToken(token) {
                if (token && 'undefined' != typeof localStorage) localStorage.setItem('vendure-auth-token', token);
            }
            createApolloClient(uri) {
                const link = new types.HttpLink({
                    uri
                });
                const afterwareLink = new types.ApolloLink((o, f)=>this.authHandler(o, f));
                return new types.ApolloClient({
                    cache: new types.InMemoryCache(),
                    link: (0, types.concat)(afterwareLink, link)
                });
            }
            constructor(vendureClientConfig){
                vendure_client_define_property(this, "auth", void 0);
                vendure_client_define_property(this, "customer", void 0);
                vendure_client_define_property(this, "order", void 0);
                vendure_client_define_property(this, "apolloClient", void 0);
                this.apolloClient = this.createApolloClient(vendureClientConfig.apiUri);
                this.order = new Order(this.apolloClient);
                this.customer = new Customer(this.apolloClient);
                this.auth = new Auth(this.apolloClient);
            }
        }
    },
    "@apollo/client/core/core.cjs": function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__apollo_client_core_core_cjs_912e52f7__;
    },
    "@apollo/client/link/core/core.cjs": function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__apollo_client_link_core_core_cjs_d0cfd889__;
    },
    "@apollo/client/link/http/http.cjs": function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__apollo_client_link_http_http_cjs_d7af7894__;
    }
};
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}
(()=>{
    __webpack_require__.d = (exports, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    };
})();
__webpack_require__("./src/types/index.ts");
var vendure_client = __webpack_require__("./src/vendure-client.ts");
var __webpack_exports__VendureClient = vendure_client.V;
export { __webpack_exports__VendureClient as VendureClient };
