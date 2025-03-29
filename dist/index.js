import*as e from"@apollo/client/core/core.cjs";import*as t from"@apollo/client/link/core/core.cjs";import*as a from"@apollo/client/link/http/http.cjs";import*as r from"@arrirpc/schema";var n={"./src/types/astro.types.ts":function(e,t,a){var r=a("@apollo/client/core/core.cjs");a.o(r,"ApolloClient")&&a.d(t,{ApolloClient:function(){return r.ApolloClient}}),a.o(r,"ApolloLink")&&a.d(t,{ApolloLink:function(){return r.ApolloLink}}),a.o(r,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return r.InMemoryCache}}),a.o(r,"gql")&&a.d(t,{gql:function(){return r.gql}}),a.o(r,"HttpLink")&&a.d(t,{HttpLink:function(){return r.HttpLink}}),a.o(r,"concat")&&a.d(t,{concat:function(){return r.concat}});var n=a("@apollo/client/link/core/core.cjs");a.o(n,"ApolloClient")&&a.d(t,{ApolloClient:function(){return n.ApolloClient}}),a.o(n,"ApolloLink")&&a.d(t,{ApolloLink:function(){return n.ApolloLink}}),a.o(n,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return n.InMemoryCache}}),a.o(n,"gql")&&a.d(t,{gql:function(){return n.gql}}),a.o(n,"HttpLink")&&a.d(t,{HttpLink:function(){return n.HttpLink}}),a.o(n,"concat")&&a.d(t,{concat:function(){return n.concat}});var i=a("@apollo/client/link/http/http.cjs");a.o(i,"ApolloClient")&&a.d(t,{ApolloClient:function(){return i.ApolloClient}}),a.o(i,"ApolloLink")&&a.d(t,{ApolloLink:function(){return i.ApolloLink}}),a.o(i,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return i.InMemoryCache}}),a.o(i,"gql")&&a.d(t,{gql:function(){return i.gql}}),a.o(i,"HttpLink")&&a.d(t,{HttpLink:function(){return i.HttpLink}}),a.o(i,"concat")&&a.d(t,{concat:function(){return i.concat}})},"@apollo/client/core/core.cjs":function(t){t.exports=e},"@apollo/client/link/core/core.cjs":function(e){e.exports=t},"@apollo/client/link/http/http.cjs":function(e){e.exports=a}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=r.a.object({login:r.a.object({id:r.a.string(),identifier:r.a.string()})}),l=r.a.object({registerCustomerAccount:r.a.object({success:r.a.boolean()})});var u=o("./src/types/astro.types.ts");class c{async query(e,t){try{let a=await this.client.query(t),n=r.a.parse(e,a.data);if(n.success)return{data:n.value};return{error:n.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}async mutate(e,t){try{let a=await this.client.mutate(t),n=r.a.parse(e,a.data);if(n.success)return{data:n.value};return{error:n.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}constructor(e){var t,a;a=void 0,(t="client")in this?Object.defineProperty(this,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[t]=a,this.client=e}}class d extends c{async login(e,t){return this.mutate(s,{mutation:(0,u.gql)`
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
            `,variables:{email:e,password:t}})}async register(e,t,a,r){return this.mutate(l,{mutation:(0,u.gql)`
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
            `,variables:{input:{firstName:e,lastName:t,email:a,password:r}}})}}let p=r.a.object({id:r.a.string(),createdAt:r.a.string(),name:r.a.string(),type:r.a.string(),fileSize:r.a.number(),mimeType:r.a.string(),width:r.a.number(),height:r.a.number(),source:r.a.string(),preview:r.a.string()}),m=r.a.object({id:r.a.string(),name:r.a.string()}),g=r.a.object({description:r.a.string(),taxRate:r.a.number()}),b=r.a.object({id:r.a.string(),name:r.a.string(),isDefault:r.a.boolean()}),y=r.a.object({id:r.a.string(),name:r.a.string(),enabled:r.a.boolean(),value:r.a.number(),category:b,zone:m}),h=r.a.object({description:r.a.string(),taxRate:r.a.number(),taxBase:r.a.number(),taxTotal:r.a.number()}),C=r.a.object({id:r.a.string(),facet:r.a.optional(r.a.object({id:r.a.string(),name:r.a.string(),code:r.a.string()})),facetId:r.a.string(),name:r.a.string(),code:r.a.string()});r.a.object({id:r.a.string(),name:r.a.string(),code:r.a.string(),values:r.a.array(r.a.object({id:r.a.string(),facetId:r.a.string(),name:r.a.string(),code:r.a.string()}))});let f=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),groupId:r.a.string(),group:r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string()})});r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),options:r.a.array(r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),groupId:r.a.string()}))}),r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),name:r.a.string(),slug:r.a.string(),description:r.a.string(),featuredAsset:p,assets:r.a.array(p),facetValues:r.a.array(C),customFields:r.a.object({location:r.a.string(),date:r.a.timestamp()})});let A=r.a.object({id:r.a.string(),productId:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),sku:r.a.string(),name:r.a.string(),featuredAsset:r.a.nullable(p),assets:r.a.array(p),price:r.a.number(),currencyCode:r.a.string(),priceWithTax:r.a.number(),stockLevel:r.a.string(),taxRateApplied:y,taxCategory:b,options:r.a.array(f),facetValues:r.a.array(C)}),j=r.a.object({id:r.a.string(),name:r.a.string(),slug:r.a.string()}),v=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),name:r.a.string(),slug:r.a.string(),breadcrumbs:r.a.array(j),position:r.a.number(),description:r.a.string(),featuredAsset:p,assets:r.a.array(p),parentId:r.a.string(),productVariants:r.a.array(A)});r.a.object({collection:v});let L=e=>{var t,a;return Object.entries({...e.properties,...e.optionalProperties,...null===(t=e.elements)||void 0===t?void 0:t.properties,...null===(a=e.elements)||void 0===a?void 0:a.optionalProperties}).map(e=>{let[t,a]=e;return"object"!=typeof a?t:"properties"in a||"elements"in a||"optionalProperties"in a?a.elements&&!(a.elements.properties||a.elements.optionalProperties)?t:`${t} {
${L(a)}
}`:t}).join("\n")};class I extends c{async getCollectionById(e){return this.query(v,{query:(0,u.gql)`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${L(v)}
                    }
                }
            `,variables:{id:e}})}}let q=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),enabled:r.a.boolean()}),$=r.a.object({id:r.a.string(),fullName:r.a.string(),company:r.a.string(),streetLine1:r.a.string(),streetLine2:r.a.string(),city:r.a.string(),province:r.a.string(),postalCode:r.a.string(),country:q,phoneNumber:r.a.string(),defaultShippingAddress:r.a.boolean(),defaultBillingAddress:r.a.boolean()}),k=r.a.object({id:r.a.string(),title:r.a.string(),firstName:r.a.string(),lastName:r.a.string(),phoneNumber:r.a.string(),emailAddress:r.a.string(),addresses:r.a.array($),customFields:r.a.object({subscribedUntil:r.a.nullable(r.a.timestamp())})}),x=r.a.object({activeCustomer:r.a.nullable(k)}),T=r.a.object({createCustomerAddress:$}),O=r.a.object({updateCustomerAddress:$}),P=r.a.object({deleteCustomerAddress:r.a.object({success:r.a.boolean()})});class w extends c{async getActiveCustomer(){return this.query(x,{query:(0,u.gql)`
                query GetActiveCustomer {
                    ${L(x)}
                }
            `})}async createCustomerAddress(e){return this.mutate(T,{mutation:(0,u.gql)`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ${L($)}
                   }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}async updateCustomerAddress(e){return this.mutate(O,{mutation:(0,u.gql)`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        ${L($)}
                   }
                }
            `,variables:{input:{id:e.id,fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}async deleteCustomerAddress(e){return this.mutate(P,{mutation:(0,u.gql)`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,variables:{id:e}})}}let S=r.a.object({orderLineId:r.a.string(),quantity:r.a.number(),refundId:r.a.string()}),N=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),items:r.a.number(),shipping:r.a.number(),adjustment:r.a.number(),total:r.a.number(),method:r.a.string(),state:r.a.string(),transactionId:r.a.string(),reason:r.a.string(),lines:r.a.array(S),paymentId:r.a.string()}),M=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),method:r.a.string(),amount:r.a.number(),state:r.a.string(),transactionId:r.a.string(),errorMessage:r.a.string(),refunds:r.a.array(N)}),W=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),startsAt:r.a.timestamp(),endsAt:r.a.timestamp(),couponCode:r.a.string(),perCustomerUsageLimit:r.a.number(),name:r.a.string(),description:r.a.string(),enabled:r.a.boolean()}),H=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),description:r.a.string(),sku:r.a.string(),taxLines:r.a.array(g),price:r.a.number(),priceWithTax:r.a.number(),taxRate:r.a.number()}),B=r.a.object({adjustmentSource:r.a.string(),type:r.a.string(),description:r.a.string(),amount:r.a.number(),amountWithTax:r.a.number()}),U=r.a.object({id:r.a.string(),productVariant:r.a.optional(A),featuredAsset:p,unitPrice:r.a.number(),unitPriceWithTax:r.a.number(),discountedUnitPrice:r.a.number(),discountedUnitPriceWithTax:r.a.number(),quantity:r.a.number(),orderPlacedQuantity:r.a.number(),taxRate:r.a.number(),linePrice:r.a.number(),linePriceWithTax:r.a.number(),discountedLinePrice:r.a.number(),discountedLinePriceWithTax:r.a.number(),proratedLinePrice:r.a.number(),proratedLinePriceWithTax:r.a.number(),lineTax:r.a.number(),discounts:r.a.array(B),taxLines:r.a.array(g)}),R=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),description:r.a.string()}),V=r.a.object({id:r.a.string(),shippingMethod:R,price:r.a.number(),priceWithTax:r.a.number(),discountedPrice:r.a.number(),discountedPriceWithTax:r.a.number()}),D=r.a.object({fullName:r.a.nullable(r.a.string()),company:r.a.nullable(r.a.string()),streetLine1:r.a.nullable(r.a.string()),streetLine2:r.a.nullable(r.a.string()),city:r.a.nullable(r.a.string()),province:r.a.nullable(r.a.string()),postalCode:r.a.nullable(r.a.string()),country:r.a.nullable(r.a.string()),countryCode:r.a.nullable(r.a.string()),phoneNumber:r.a.nullable(r.a.string())}),E=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),type:r.a.string(),orderPlacedAt:r.a.nullable(r.a.timestamp()),code:r.a.string(),state:r.a.string(),active:r.a.boolean(),customer:r.a.optional(k),shippingAddress:r.a.optional(D),billingAddress:r.a.optional(D),lines:r.a.array(U),surcharges:r.a.array(H),discounts:r.a.array(B),couponCodes:r.a.array(r.a.string()),promotions:r.a.array(W),payments:r.a.array(M),totalQuantity:r.a.number(),subTotal:r.a.number(),subTotalWithTax:r.a.number(),currencyCode:r.a.string(),shippingLines:r.a.array(V),shipping:r.a.number(),shippingWithTax:r.a.number(),total:r.a.number(),totalWithTax:r.a.number(),taxSummary:r.a.array(h)});r.a.object({items:r.a.array(E),totalItems:r.a.number()});let z=r.a.object({orderByCode:r.a.object({state:r.a.string()})}),F=r.a.object({activeOrder:r.a.nullable(E)}),G=r.a.object({addItemToOrder:r.a.nullable(E)}),Q=r.a.object({adjustOrderLine:r.a.nullable(E)}),J=r.a.object({removeOrderLine:r.a.nullable(E)}),K=r.a.object({applyCouponCode:r.a.nullable(E)});class X extends c{async getByCode(e){return this.query(z,{query:(0,u.gql)`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        state
                    }
                }
            `,variables:{code:e}})}async getActiveOrder(){return this.query(F,{query:(0,u.gql)`
                query GetActiveOrder {
                    ${L(F)}
                }
            `})}async addItemToOrder(e,t){return this.mutate(G,{mutation:(0,u.gql)`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ... on Order {
                            ${L(E)}
                        }
                    }
                }
            `,variables:{productVariantId:e,quantity:t}})}async adjustOrderLine(e,t){return this.mutate(Q,{mutation:(0,u.gql)`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        ${L(E)}
                    }
                }
            `,variables:{orderLineId:e,quantity:t}})}async removeOrderLine(e){return this.mutate(J,{mutation:(0,u.gql)`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        ... on Order {
                            ${L(E)}
                        }
                    }
                }
            `,variables:{orderLineId:e}})}async applyCouponCode(e){return this.mutate(K,{mutation:(0,u.gql)`
                mutation applyCouponCode($couponCode: String!) {
                    applyCouponCode(couponCode: $couponCode) {
                        ... on Order {
                            ${L(E)}
                        }
                    }
                }
            `,variables:{couponCode:e}})}}function Y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class Z{authHandler(e,t){let a=this.getAuthToken(),r=a?`Bearer ${a}`:null;return e.setContext({headers:{authorization:r}}),t(e).map(t=>{let{response:{headers:a}}=e.getContext(),r=a.get("vendure-auth-token");return this.saveAuthToken(r),t})}getAuthToken(){return"undefined"!=typeof localStorage?localStorage.getItem("vendure-auth-token"):null}saveAuthToken(e){e&&"undefined"!=typeof localStorage&&localStorage.setItem("vendure-auth-token",e)}createApolloClient(e){let t=new u.HttpLink({uri:e}),a=new u.ApolloLink((e,t)=>this.authHandler(e,t));return new u.ApolloClient({cache:new u.InMemoryCache,link:(0,u.concat)(a,t)})}constructor(e){Y(this,"auth",void 0),Y(this,"customer",void 0),Y(this,"collection",void 0),Y(this,"order",void 0),Y(this,"apolloClient",void 0),this.apolloClient=this.createApolloClient(e.apiUri),this.order=new X(this.apolloClient),this.customer=new w(this.apolloClient),this.collection=new I(this.apolloClient),this.auth=new d(this.apolloClient)}}export{Z as VendureClient};