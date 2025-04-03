import*as e from"@apollo/client/core/core.cjs";import*as t from"@apollo/client/link/core/core.cjs";import*as a from"@apollo/client/link/http/http.cjs";import*as r from"@arrirpc/schema";var n={"./src/types/astro.types.ts":function(e,t,a){var r=a("@apollo/client/core/core.cjs");a.o(r,"ApolloClient")&&a.d(t,{ApolloClient:function(){return r.ApolloClient}}),a.o(r,"ApolloLink")&&a.d(t,{ApolloLink:function(){return r.ApolloLink}}),a.o(r,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return r.InMemoryCache}}),a.o(r,"gql")&&a.d(t,{gql:function(){return r.gql}}),a.o(r,"HttpLink")&&a.d(t,{HttpLink:function(){return r.HttpLink}}),a.o(r,"concat")&&a.d(t,{concat:function(){return r.concat}});var n=a("@apollo/client/link/core/core.cjs");a.o(n,"ApolloClient")&&a.d(t,{ApolloClient:function(){return n.ApolloClient}}),a.o(n,"ApolloLink")&&a.d(t,{ApolloLink:function(){return n.ApolloLink}}),a.o(n,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return n.InMemoryCache}}),a.o(n,"gql")&&a.d(t,{gql:function(){return n.gql}}),a.o(n,"HttpLink")&&a.d(t,{HttpLink:function(){return n.HttpLink}}),a.o(n,"concat")&&a.d(t,{concat:function(){return n.concat}});var i=a("@apollo/client/link/http/http.cjs");a.o(i,"ApolloClient")&&a.d(t,{ApolloClient:function(){return i.ApolloClient}}),a.o(i,"ApolloLink")&&a.d(t,{ApolloLink:function(){return i.ApolloLink}}),a.o(i,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return i.InMemoryCache}}),a.o(i,"gql")&&a.d(t,{gql:function(){return i.gql}}),a.o(i,"HttpLink")&&a.d(t,{HttpLink:function(){return i.HttpLink}}),a.o(i,"concat")&&a.d(t,{concat:function(){return i.concat}})},"@apollo/client/core/core.cjs":function(t){t.exports=e},"@apollo/client/link/core/core.cjs":function(e){e.exports=t},"@apollo/client/link/http/http.cjs":function(e){e.exports=a}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=r.a.object({login:r.a.object({id:r.a.string(),identifier:r.a.string()})}),l=r.a.object({registerCustomerAccount:r.a.object({success:r.a.boolean()})}),u=r.a.object({logout:r.a.object({success:r.a.boolean()})});var d=o("./src/types/astro.types.ts");class c{async query(e,t){try{let a=await this.client.query(t),n=r.a.parse(e,a.data);if(n.success)return{data:n.value};return{error:n.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}async mutate(e,t){try{let a=await this.client.mutate(t),n=r.a.parse(e,a.data);if(n.success)return{data:n.value};return{error:n.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}constructor(e){var t,a;a=void 0,(t="client")in this?Object.defineProperty(this,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[t]=a,this.client=e}}class p extends c{async login(e,t){return this.mutate(s,{mutation:(0,d.gql)`
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
            `,variables:{email:e,password:t}})}async register(e,t,a,r){return this.mutate(l,{mutation:(0,d.gql)`
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
            `,variables:{input:{firstName:e,lastName:t,email:a,password:r}}})}async logout(){return this.mutate(u,{mutation:(0,d.gql)`
                mutation Logout {
                    logout {
                        success
                    }
                }
            `})}}let m=r.a.object({id:r.a.string(),createdAt:r.a.string(),name:r.a.string(),type:r.a.string(),fileSize:r.a.number(),mimeType:r.a.string(),width:r.a.number(),height:r.a.number(),source:r.a.string(),preview:r.a.string()}),g=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),enabled:r.a.boolean()}),b=r.a.object({id:r.a.string(),fullName:r.a.string(),company:r.a.string(),streetLine1:r.a.string(),streetLine2:r.a.string(),city:r.a.string(),province:r.a.string(),postalCode:r.a.string(),country:g,phoneNumber:r.a.string(),defaultShippingAddress:r.a.boolean(),defaultBillingAddress:r.a.boolean()}),y=r.a.object({id:r.a.string(),title:r.a.string(),firstName:r.a.string(),lastName:r.a.string(),phoneNumber:r.a.string(),emailAddress:r.a.string(),addresses:r.a.array(b),customFields:r.a.object({subscribedUntil:r.a.nullable(r.a.timestamp())})}),h=r.a.object({activeCustomer:r.a.nullable(y)}),C=r.a.object({createCustomerAddress:b}),A=r.a.object({updateCustomerAddress:b}),j=r.a.object({deleteCustomerAddress:r.a.object({success:r.a.boolean()})}),f=r.a.object({orderLineId:r.a.string(),quantity:r.a.number(),refundId:r.a.string()}),v=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),items:r.a.number(),shipping:r.a.number(),adjustment:r.a.number(),total:r.a.number(),method:r.a.string(),state:r.a.string(),transactionId:r.a.string(),reason:r.a.string(),lines:r.a.array(f),paymentId:r.a.string()}),q=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),method:r.a.string(),amount:r.a.number(),state:r.a.string(),transactionId:r.a.string(),errorMessage:r.a.string(),refunds:r.a.array(v)}),L=r.a.object({id:r.a.string(),name:r.a.string()}),I=r.a.object({description:r.a.string(),taxRate:r.a.number()}),$=r.a.object({id:r.a.string(),name:r.a.string(),isDefault:r.a.boolean()}),x=r.a.object({id:r.a.string(),name:r.a.string(),enabled:r.a.boolean(),value:r.a.number(),category:$,zone:L}),k=r.a.object({description:r.a.string(),taxRate:r.a.number(),taxBase:r.a.number(),taxTotal:r.a.number()}),O=r.a.object({id:r.a.string(),facet:r.a.optional(r.a.object({id:r.a.string(),name:r.a.string(),code:r.a.string()})),facetId:r.a.string(),name:r.a.string(),code:r.a.string()});r.a.object({id:r.a.string(),name:r.a.string(),code:r.a.string(),values:r.a.array(r.a.object({id:r.a.string(),facetId:r.a.string(),name:r.a.string(),code:r.a.string()}))});let S=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),groupId:r.a.string(),group:r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string()})});r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),options:r.a.array(r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),groupId:r.a.string()}))}),r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),name:r.a.string(),slug:r.a.string(),description:r.a.string(),featuredAsset:m,assets:r.a.array(m),facetValues:r.a.array(O),customFields:r.a.object({location:r.a.string(),date:r.a.timestamp()})});let T=r.a.object({id:r.a.string(),productId:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),sku:r.a.string(),name:r.a.string(),featuredAsset:r.a.nullable(m),assets:r.a.array(m),price:r.a.number(),currencyCode:r.a.string(),priceWithTax:r.a.number(),stockLevel:r.a.string(),taxRateApplied:x,taxCategory:$,options:r.a.array(S),facetValues:r.a.array(O)}),P=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),startsAt:r.a.timestamp(),endsAt:r.a.timestamp(),couponCode:r.a.string(),perCustomerUsageLimit:r.a.number(),name:r.a.string(),description:r.a.string(),enabled:r.a.boolean()}),M=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),description:r.a.string(),sku:r.a.string(),taxLines:r.a.array(I),price:r.a.number(),priceWithTax:r.a.number(),taxRate:r.a.number()}),w=r.a.object({adjustmentSource:r.a.string(),type:r.a.string(),description:r.a.string(),amount:r.a.number(),amountWithTax:r.a.number()}),N=r.a.object({id:r.a.string(),productVariant:r.a.optional(T),featuredAsset:m,unitPrice:r.a.number(),unitPriceWithTax:r.a.number(),discountedUnitPrice:r.a.number(),discountedUnitPriceWithTax:r.a.number(),quantity:r.a.number(),orderPlacedQuantity:r.a.number(),taxRate:r.a.number(),linePrice:r.a.number(),linePriceWithTax:r.a.number(),discountedLinePrice:r.a.number(),discountedLinePriceWithTax:r.a.number(),proratedLinePrice:r.a.number(),proratedLinePriceWithTax:r.a.number(),lineTax:r.a.number(),discounts:r.a.array(w),taxLines:r.a.array(I)}),W=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),description:r.a.string()}),B=r.a.object({id:r.a.string(),shippingMethod:W,price:r.a.number(),priceWithTax:r.a.number(),discountedPrice:r.a.number(),discountedPriceWithTax:r.a.number()}),H=r.a.object({fullName:r.a.nullable(r.a.string()),company:r.a.nullable(r.a.string()),streetLine1:r.a.nullable(r.a.string()),streetLine2:r.a.nullable(r.a.string()),city:r.a.nullable(r.a.string()),province:r.a.nullable(r.a.string()),postalCode:r.a.nullable(r.a.string()),country:r.a.nullable(r.a.string()),countryCode:r.a.nullable(r.a.string()),phoneNumber:r.a.nullable(r.a.string())}),U=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),type:r.a.string(),orderPlacedAt:r.a.nullable(r.a.timestamp()),code:r.a.string(),state:r.a.string(),active:r.a.boolean(),customer:r.a.optional(y),shippingAddress:r.a.optional(H),billingAddress:r.a.optional(H),lines:r.a.array(N),surcharges:r.a.array(M),discounts:r.a.array(w),couponCodes:r.a.array(r.a.string()),promotions:r.a.array(P),payments:r.a.array(q),totalQuantity:r.a.number(),subTotal:r.a.number(),subTotalWithTax:r.a.number(),currencyCode:r.a.string(),shippingLines:r.a.array(B),shipping:r.a.number(),shippingWithTax:r.a.number(),total:r.a.number(),totalWithTax:r.a.number(),taxSummary:r.a.array(k)});r.a.object({items:r.a.array(U),totalItems:r.a.number()});let E=r.a.object({orderByCode:r.a.object({state:r.a.string()})}),R=r.a.object({activeOrder:r.a.nullable(U)}),D=r.a.object({addItemToOrder:r.a.nullable(U)}),V=r.a.object({adjustOrderLine:r.a.nullable(U)}),z=r.a.object({removeOrderLine:r.a.nullable(U)}),F=r.a.object({transitionOrderToState:r.a.nullable(U)}),G=r.a.object({applyCouponCode:r.a.nullable(U)}),Q=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),description:r.a.string(),isEligible:r.a.boolean()}),J=r.a.object({id:r.a.string(),price:r.a.number(),priceWithTax:r.a.number(),code:r.a.string(),name:r.a.string(),description:r.a.string()}),K=r.a.object({eligiblePaymentMethods:r.a.array(Q)}),X=r.a.object({eligibleShippingMethods:r.a.array(J)}),Y=r.a.object({setOrderShippingAddress:U}),Z=r.a.object({setOrderShippingMethod:U}),_=r.a.object({createStripePaymentIntent:r.a.string()}),ee=e=>{let t=Object.entries({...e.properties,...e.optionalProperties});return 0===t.length?"":t.map(e=>{let[t,a]=e;return"properties"in a?`${t} { ${ee(a)} }`:"elements"in a&&!("type"in a.elements)?`${t} { ${ee(a.elements)} }`:t}).join(" ")};class et extends c{async eligiblePaymentMethods(){return this.query(K,{query:(0,d.gql)`
                query EligiblePaymentMethods {
                    ${ee(K)}
                }
            `})}async eligibleShippingMethods(){return this.query(X,{query:(0,d.gql)`
                query EligibleShippingMethods {
                    ${ee(X)}
                }
            `})}async setOrderShippingAddress(e){return this.mutate(Y,{mutation:(0,d.gql)`
                mutation SetOrderShippingAddress($input: CreateAddressInput!) {
                    setOrderShippingAddress(input: $input) {
                        ... on Order {
                            ${ee(U)}
                        }
                    }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}async setOrderShippingMethod(e){return this.mutate(Z,{mutation:(0,d.gql)`
                mutation SetOrderShippingMethod($id: [ID!]!) {
                    setOrderShippingMethod(shippingMethodId: $id) {
                        ... on Order {
                            ${ee(U)}
                        }
                    }
                }
            `,variables:{id:[e]}})}async createStripePaymentIntent(){return this.mutate(_,{mutation:(0,d.gql)`
                mutation CreateStripePaymentIntent {
                    createStripePaymentIntent
                }
            `})}}let ea=r.a.object({id:r.a.string(),name:r.a.string(),slug:r.a.string()}),er=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),name:r.a.string(),slug:r.a.string(),breadcrumbs:r.a.array(ea),position:r.a.number(),description:r.a.string(),featuredAsset:m,assets:r.a.array(m),parentId:r.a.string(),productVariants:r.a.array(T)});r.a.object({collection:er});class en extends c{async getCollectionById(e){return this.query(er,{query:(0,d.gql)`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${ee(er)}
                    }
                }
            `,variables:{id:e}})}}class ei extends c{async getActiveCustomer(){return this.query(h,{query:(0,d.gql)`
                query GetActiveCustomer {
                    ${ee(h)}
                }
            `})}async createCustomerAddress(e){return this.mutate(C,{mutation:(0,d.gql)`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ${ee(b)}
                   }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}async updateCustomerAddress(e){return this.mutate(A,{mutation:(0,d.gql)`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        ${ee(b)}
                   }
                }
            `,variables:{input:{id:e.id,fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}async deleteCustomerAddress(e){return this.mutate(j,{mutation:(0,d.gql)`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,variables:{id:e}})}}class eo extends c{async getByCode(e){return this.query(E,{query:(0,d.gql)`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        ${ee(U)}
                    }
                }
            `,variables:{code:e}})}async getActiveOrder(){return this.query(R,{query:(0,d.gql)`
                query GetActiveOrder {
                        ${ee(R)}
                }
            `})}async transitionOrderToState(e){return this.mutate(F,{mutation:(0,d.gql)`
                mutation TransitionOrderToState($state: String!) {
                    transitionOrderToState(state: $state) {
                        ... on Order {
                            ${ee(U)}
                        }
                    }
                }
            `,variables:{state:e}})}async addItemToOrder(e,t){return this.mutate(D,{mutation:(0,d.gql)`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ... on Order {
                            ${ee(U)}
                        }
                    }
                }
            `,variables:{productVariantId:e,quantity:t}})}async adjustOrderLine(e,t){return this.mutate(V,{mutation:(0,d.gql)`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        ... on Order {
                            ${ee(U)}
                        }
                    }
                }
            `,variables:{orderLineId:e,quantity:t}})}async removeOrderLine(e){return this.mutate(z,{mutation:(0,d.gql)`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        ... on Order {
                            ${ee(U)}
                        }
                    }
                }
            `,variables:{orderLineId:e}})}async applyCouponCode(e){return this.mutate(G,{mutation:(0,d.gql)`
                mutation ApplyCouponCode($couponCode: String!) {
                    applyCouponCode(couponCode: $couponCode) {
                        ... on Order {
                            ${ee(U)}
                        }
                    }
                }
            `,variables:{couponCode:e}})}}let es=r.a.object({availableCountries:r.a.array(g)});class el extends c{async availableCountries(){return this.query(es,{query:(0,d.gql)`
                query AvailableCountries {
                    availableCountries {
                        ${ee(g)}
                    }
                }
            `})}}function eu(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class ed{authHandler(e,t){let a=this.getAuthToken(),r=a?`Bearer ${a}`:null;return e.setContext({headers:{authorization:r}}),t(e).map(t=>{let{response:{headers:a}}=e.getContext(),r=a.get("vendure-auth-token");return this.saveAuthToken(r),t})}getAuthToken(){return"undefined"!=typeof localStorage?localStorage.getItem("vendure-auth-token"):null}saveAuthToken(e){e&&"undefined"!=typeof localStorage&&localStorage.setItem("vendure-auth-token",e)}createApolloClient(e){let t=new d.HttpLink({uri:e}),a=new d.ApolloLink((e,t)=>this.authHandler(e,t));return new d.ApolloClient({cache:new d.InMemoryCache,link:(0,d.concat)(a,t)})}constructor(e){eu(this,"auth",void 0),eu(this,"customer",void 0),eu(this,"collection",void 0),eu(this,"checkout",void 0),eu(this,"utils",void 0),eu(this,"order",void 0),eu(this,"apolloClient",void 0),this.apolloClient=this.createApolloClient(e.apiUri),this.order=new eo(this.apolloClient),this.customer=new ei(this.apolloClient),this.collection=new en(this.apolloClient),this.checkout=new et(this.apolloClient),this.utils=new el(this.apolloClient),this.auth=new p(this.apolloClient)}}export{ed as VendureClient};