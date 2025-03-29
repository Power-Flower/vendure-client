import*as e from"@apollo/client/core/core.cjs";import*as t from"@apollo/client/link/core/core.cjs";import*as r from"@apollo/client/link/http/http.cjs";import*as a from"@arrirpc/schema";var n={"./src/types/astro.types.ts":function(e,t,r){var a=r("@apollo/client/core/core.cjs");r.o(a,"ApolloClient")&&r.d(t,{ApolloClient:function(){return a.ApolloClient}}),r.o(a,"ApolloLink")&&r.d(t,{ApolloLink:function(){return a.ApolloLink}}),r.o(a,"InMemoryCache")&&r.d(t,{InMemoryCache:function(){return a.InMemoryCache}}),r.o(a,"gql")&&r.d(t,{gql:function(){return a.gql}}),r.o(a,"HttpLink")&&r.d(t,{HttpLink:function(){return a.HttpLink}}),r.o(a,"concat")&&r.d(t,{concat:function(){return a.concat}});var n=r("@apollo/client/link/core/core.cjs");r.o(n,"ApolloClient")&&r.d(t,{ApolloClient:function(){return n.ApolloClient}}),r.o(n,"ApolloLink")&&r.d(t,{ApolloLink:function(){return n.ApolloLink}}),r.o(n,"InMemoryCache")&&r.d(t,{InMemoryCache:function(){return n.InMemoryCache}}),r.o(n,"gql")&&r.d(t,{gql:function(){return n.gql}}),r.o(n,"HttpLink")&&r.d(t,{HttpLink:function(){return n.HttpLink}}),r.o(n,"concat")&&r.d(t,{concat:function(){return n.concat}});var i=r("@apollo/client/link/http/http.cjs");r.o(i,"ApolloClient")&&r.d(t,{ApolloClient:function(){return i.ApolloClient}}),r.o(i,"ApolloLink")&&r.d(t,{ApolloLink:function(){return i.ApolloLink}}),r.o(i,"InMemoryCache")&&r.d(t,{InMemoryCache:function(){return i.InMemoryCache}}),r.o(i,"gql")&&r.d(t,{gql:function(){return i.gql}}),r.o(i,"HttpLink")&&r.d(t,{HttpLink:function(){return i.HttpLink}}),r.o(i,"concat")&&r.d(t,{concat:function(){return i.concat}})},"@apollo/client/core/core.cjs":function(t){t.exports=e},"@apollo/client/link/core/core.cjs":function(e){e.exports=t},"@apollo/client/link/http/http.cjs":function(e){e.exports=r}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=a.a.object({login:a.a.object({id:a.a.string(),identifier:a.a.string()})}),u=a.a.object({registerCustomerAccount:a.a.object({success:a.a.boolean()})});var c=o("./src/types/astro.types.ts");class l{async query(e,t){try{let r=await this.client.query(t),n=a.a.parse(e,r.data);if(n.success)return{data:n.value};return{error:n.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}async mutate(e,t){try{let r=await this.client.mutate(t),n=a.a.parse(e,r.data);if(n.success)return{data:n.value};return{error:n.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}constructor(e){var t,r;r=void 0,(t="client")in this?Object.defineProperty(this,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[t]=r,this.client=e}}class d extends l{async login(e,t){return this.mutate(s,{mutation:(0,c.gql)`
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
            `,variables:{email:e,password:t}})}async register(e,t,r,a){return this.mutate(u,{mutation:(0,c.gql)`
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
            `,variables:{input:{firstName:e,lastName:t,email:r,password:a}}})}}let p=a.a.object({id:a.a.string(),createdAt:a.a.string(),name:a.a.string(),type:a.a.string(),fileSize:a.a.number(),mimeType:a.a.string(),width:a.a.number(),height:a.a.number(),source:a.a.string(),preview:a.a.string()}),m=a.a.object({id:a.a.string(),name:a.a.string()}),g=a.a.object({description:a.a.string(),taxRate:a.a.number()}),b=a.a.object({id:a.a.string(),name:a.a.string(),isDefault:a.a.boolean()}),y=a.a.object({id:a.a.string(),name:a.a.string(),enabled:a.a.boolean(),value:a.a.number(),category:b,zone:m}),h=a.a.object({description:a.a.string(),taxRate:a.a.number(),taxBase:a.a.number(),taxTotal:a.a.number()}),A=a.a.object({id:a.a.string(),facet:a.a.optional(a.a.object({id:a.a.string(),name:a.a.string(),code:a.a.string()})),facetId:a.a.string(),name:a.a.string(),code:a.a.string()});a.a.object({id:a.a.string(),name:a.a.string(),code:a.a.string(),values:a.a.array(a.a.object({id:a.a.string(),facetId:a.a.string(),name:a.a.string(),code:a.a.string()}))});let f=a.a.object({id:a.a.string(),code:a.a.string(),name:a.a.string(),groupId:a.a.string(),group:a.a.object({id:a.a.string(),code:a.a.string(),name:a.a.string()})});a.a.object({id:a.a.string(),code:a.a.string(),name:a.a.string(),options:a.a.array(a.a.object({id:a.a.string(),code:a.a.string(),name:a.a.string(),groupId:a.a.string()}))}),a.a.object({id:a.a.string(),createdAt:a.a.timestamp(),languageCode:a.a.string(),name:a.a.string(),slug:a.a.string(),description:a.a.string(),featuredAsset:p,assets:a.a.array(p),facetValues:a.a.array(A),customFields:a.a.object({location:a.a.string(),date:a.a.timestamp()})});let C=a.a.object({id:a.a.string(),productId:a.a.string(),createdAt:a.a.timestamp(),languageCode:a.a.string(),sku:a.a.string(),name:a.a.string(),featuredAsset:p,assets:a.a.array(p),price:a.a.number(),currencyCode:a.a.string(),priceWithTax:a.a.number(),stockLevel:a.a.number(),taxRateApplied:y,taxCategory:b,options:a.a.array(f),facetValues:a.a.array(A)}),j=a.a.object({id:a.a.string(),name:a.a.string(),slug:a.a.string()}),v=a.a.object({id:a.a.string(),createdAt:a.a.timestamp(),languageCode:a.a.string(),name:a.a.string(),slug:a.a.string(),breadcrumbs:a.a.array(j),position:a.a.number(),description:a.a.string(),featuredAsset:p,assets:a.a.array(p),parentId:a.a.string(),productVariants:a.a.array(C)});a.a.object({collection:v});let L=e=>{let t=e.properties;return"optionalProperties"in e&&(t={...t,...e.optionalProperties}),"elements"in e&&(t={...t,...e.elements.properties}),Object.entries(t).map(e=>{let[t,r]=e;return"object"!=typeof r?t:"properties"in r||"elements"in r||"optionalProperties"in r?r.elements&&!(r.elements.properties||r.elements.optionalProperties)?t:`${t} {
${L(r)}
}`:t}).join("\n")};class I extends l{async getCollectionById(e){return this.query(v,{query:(0,c.gql)`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${L(v)}
                    }
                }
            `,variables:{id:e}})}}let q=a.a.object({id:a.a.string(),code:a.a.string(),name:a.a.string(),enabled:a.a.boolean()}),k=a.a.object({id:a.a.string(),fullName:a.a.string(),company:a.a.string(),streetLine1:a.a.string(),streetLine2:a.a.string(),city:a.a.string(),province:a.a.string(),postalCode:a.a.string(),country:q,phoneNumber:a.a.string(),defaultShippingAddress:a.a.boolean(),defaultBillingAddress:a.a.boolean()}),x=a.a.object({id:a.a.string(),title:a.a.string(),firstName:a.a.string(),lastName:a.a.string(),phoneNumber:a.a.string(),emailAddress:a.a.string(),addresses:a.a.array(k),customFields:a.a.object({subscribedUntil:a.a.nullable(a.a.timestamp())})}),$=a.a.object({activeCustomer:a.a.nullable(x)}),T=a.a.object({createCustomerAddress:k}),O=a.a.object({updateCustomerAddress:k}),P=a.a.object({deleteCustomerAddress:a.a.object({success:a.a.boolean()})});class w extends l{async getActiveCustomer(){return this.query($,{query:(0,c.gql)`
                query GetActiveCustomer {
                    ${L($)}
                }
            `})}async createCustomerAddress(e){return this.mutate(T,{mutation:(0,c.gql)`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ${L(k)}
                   }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}async updateCustomerAddress(e){return this.mutate(O,{mutation:(0,c.gql)`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        ${L(k)}
                   }
                }
            `,variables:{input:{id:e.id,fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}async deleteCustomerAddress(e){return this.mutate(P,{mutation:(0,c.gql)`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,variables:{id:e}})}}let S=a.a.object({orderLineId:a.a.string(),quantity:a.a.number(),refundId:a.a.string()}),N=a.a.object({id:a.a.string(),createdAt:a.a.timestamp(),items:a.a.number(),shipping:a.a.number(),adjustment:a.a.number(),total:a.a.number(),method:a.a.string(),state:a.a.string(),transactionId:a.a.string(),reason:a.a.string(),lines:a.a.array(S),paymentId:a.a.string()}),M=a.a.object({id:a.a.string(),createdAt:a.a.timestamp(),method:a.a.string(),amount:a.a.number(),state:a.a.string(),transactionId:a.a.string(),errorMessage:a.a.string(),refunds:a.a.array(N)}),W=a.a.object({id:a.a.string(),createdAt:a.a.timestamp(),startsAt:a.a.timestamp(),endsAt:a.a.timestamp(),couponCode:a.a.string(),perCustomerUsageLimit:a.a.number(),name:a.a.string(),description:a.a.string(),enabled:a.a.boolean()}),H=a.a.object({id:a.a.string(),createdAt:a.a.timestamp(),description:a.a.string(),sku:a.a.string(),taxLines:a.a.array(g),price:a.a.number(),priceWithTax:a.a.number(),taxRate:a.a.number()}),B=a.a.object({adjustmentSource:a.a.string(),type:a.a.string(),description:a.a.string(),amount:a.a.number(),amountWithTax:a.a.number()}),U=a.a.object({id:a.a.string(),productVariant:a.a.optional(C),featuredAsset:p,unitPrice:a.a.number(),unitPriceWithTax:a.a.number(),discountedUnitPrice:a.a.number(),discountedUnitPriceWithTax:a.a.number(),quantity:a.a.number(),orderPlacedQuantity:a.a.number(),taxRate:a.a.number(),linePrice:a.a.number(),linePriceWithTax:a.a.number(),discountedLinePrice:a.a.number(),discountedLinePriceWithTax:a.a.number(),proratedLinePrice:a.a.number(),proratedLinePriceWithTax:a.a.number(),lineTax:a.a.number(),discounts:a.a.array(B),taxLines:a.a.array(g)}),R=a.a.object({id:a.a.string(),code:a.a.string(),name:a.a.string(),description:a.a.string()}),V=a.a.object({id:a.a.string(),shippingMethod:R,price:a.a.number(),priceWithTax:a.a.number(),discountedPrice:a.a.number(),discountedPriceWithTax:a.a.number()}),D=a.a.object({fullName:a.a.string(),company:a.a.string(),streetLine1:a.a.string(),streetLine2:a.a.string(),city:a.a.string(),province:a.a.string(),postalCode:a.a.string(),country:a.a.string(),countryCode:a.a.string(),phoneNumber:a.a.string()}),E=a.a.object({id:a.a.string(),createdAt:a.a.timestamp(),type:a.a.string(),orderPlacedAt:a.a.nullable(a.a.timestamp()),code:a.a.string(),state:a.a.string(),active:a.a.boolean(),customer:a.a.optional(x),shippingAddress:a.a.optional(D),billingAddress:a.a.optional(D),lines:a.a.array(U),surcharges:a.a.array(H),discounts:a.a.array(B),couponCodes:a.a.array(a.a.string()),promotions:a.a.array(W),payments:a.a.array(M),totalQuantity:a.a.number(),subTotal:a.a.number(),subTotalWithTax:a.a.number(),currencyCode:a.a.string(),shippingLines:a.a.array(V),shipping:a.a.number(),shippingWithTax:a.a.number(),total:a.a.number(),totalWithTax:a.a.number(),taxSummary:a.a.array(h)});a.a.object({items:a.a.array(E),totalItems:a.a.number()});let z=a.a.object({orderByCode:a.a.object({state:a.a.string()})}),F=a.a.object({activeOrder:a.a.optional(E)}),G=a.a.object({addToActiveOrder:a.a.optional(E)}),Q=a.a.object({adjustOrderLine:a.a.optional(E)}),J=a.a.object({removeOrderLine:a.a.optional(E)});class K extends l{async getByCode(e){return this.query(z,{query:(0,c.gql)`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        state
                    }
                }
            `,variables:{code:e}})}async getActiveOrder(){return this.query(F,{query:(0,c.gql)`
                query GetActiveOrder {
                    ${L(F)}
                }
            `})}async addToActiveOrder(e,t){return this.mutate(G,{mutation:(0,c.gql)`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ... on Order {
                            ${L(E)}
                        }
                    }
                }
            `,variables:{productVariantId:e,quantity:t}})}async adjustOrderLine(e,t){return this.mutate(Q,{mutation:(0,c.gql)`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        ${L(E)}
                    }
                }
            `,variables:{orderLineId:e,quantity:t}})}async removeOrderLine(e){return this.mutate(J,{mutation:(0,c.gql)`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        ${L(E)}
                    }
                }
            `,variables:{orderLineId:e}})}}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class Y{authHandler(e,t){let r=this.getAuthToken(),a=r?`Bearer ${r}`:null;return e.setContext({headers:{authorization:a}}),t(e).map(t=>{let{response:{headers:r}}=e.getContext(),a=r.get("vendure-auth-token");return this.saveAuthToken(a),t})}getAuthToken(){return"undefined"!=typeof localStorage?localStorage.getItem("vendure-auth-token"):null}saveAuthToken(e){e&&"undefined"!=typeof localStorage&&localStorage.setItem("vendure-auth-token",e)}createApolloClient(e){let t=new c.HttpLink({uri:e}),r=new c.ApolloLink((e,t)=>this.authHandler(e,t));return new c.ApolloClient({cache:new c.InMemoryCache,link:(0,c.concat)(r,t)})}constructor(e){X(this,"auth",void 0),X(this,"customer",void 0),X(this,"collection",void 0),X(this,"order",void 0),X(this,"apolloClient",void 0),this.apolloClient=this.createApolloClient(e.apiUri),this.order=new K(this.apolloClient),this.customer=new w(this.apolloClient),this.collection=new I(this.apolloClient),this.auth=new d(this.apolloClient)}}export{Y as VendureClient};