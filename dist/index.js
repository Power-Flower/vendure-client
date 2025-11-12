import*as e from"@apollo/client/core";import*as t from"@apollo/client/link/http";import{a as r}from"@arrirpc/schema";var n={"./src/types/astro.types.ts":function(e,t,r){var n=r("@apollo/client/core");r.o(n,"ApolloLink")&&r.d(t,{ApolloLink:function(){return n.ApolloLink}}),r.o(n,"HttpLink")&&r.d(t,{HttpLink:function(){return n.HttpLink}}),r.o(n,"ApolloClient")&&r.d(t,{ApolloClient:function(){return n.ApolloClient}}),r.o(n,"InMemoryCache")&&r.d(t,{InMemoryCache:function(){return n.InMemoryCache}}),r.o(n,"concat")&&r.d(t,{concat:function(){return n.concat}}),r.o(n,"gql")&&r.d(t,{gql:function(){return n.gql}});var i=r("@apollo/client/link/http");r.o(i,"ApolloLink")&&r.d(t,{ApolloLink:function(){return i.ApolloLink}}),r.o(i,"HttpLink")&&r.d(t,{HttpLink:function(){return i.HttpLink}}),r.o(i,"ApolloClient")&&r.d(t,{ApolloClient:function(){return i.ApolloClient}}),r.o(i,"InMemoryCache")&&r.d(t,{InMemoryCache:function(){return i.InMemoryCache}}),r.o(i,"concat")&&r.d(t,{concat:function(){return i.concat}}),r.o(i,"gql")&&r.d(t,{gql:function(){return i.gql}})},"@apollo/client/core":function(t){t.exports=e},"@apollo/client/link/http":function(e){e.exports=t}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=r.object({login:r.object({id:r.string(),identifier:r.string()})}),s=r.object({registerCustomerAccount:r.object({success:r.boolean()})}),u=r.object({logout:r.object({success:r.boolean()})});var l=o("./src/types/astro.types.ts");function c(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function d(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){c(o,n,i,a,s,"next",e)}function s(e){c(o,n,i,a,s,"throw",e)}a(void 0)})}}class p{query(e,t){return d(function*(){try{let n=yield this.client.query(t),i=r.parse(e,n.data);if(i.success)return{data:i.value};return{error:i.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}).call(this)}mutate(e,t){return d(function*(){try{let n=yield this.client.mutate(t),i=r.parse(e,n.data);if(i.success)return{data:i.value};return{error:i.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}).call(this)}constructor(e){var t,r;r=void 0,(t="client")in this?Object.defineProperty(this,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[t]=r,this.client=e}}function m(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function g(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){m(o,n,i,a,s,"next",e)}function s(e){m(o,n,i,a,s,"throw",e)}a(void 0)})}}class b extends p{login(e,t){return g(function*(){return this.mutate(a,{mutation:(0,l.gql)`
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
            `,variables:{email:e,password:t}})}).call(this)}register(e,t,r,n){return g(function*(){return this.mutate(s,{mutation:(0,l.gql)`
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
            `,variables:{input:{firstName:e,lastName:t,email:r,password:n}}})}).call(this)}logout(){return g(function*(){return this.mutate(u,{mutation:(0,l.gql)`
                mutation Logout {
                    logout {
                        success
                    }
                }
            `})}).call(this)}}let h=r.object({id:r.string(),createdAt:r.string(),name:r.string(),type:r.string(),fileSize:r.number(),mimeType:r.string(),width:r.number(),height:r.number(),source:r.string(),preview:r.string()}),y=r.object({id:r.string(),code:r.string(),name:r.string(),enabled:r.boolean()}),f=r.object({id:r.string(),fullName:r.string(),company:r.string(),streetLine1:r.string(),streetLine2:r.string(),city:r.string(),province:r.string(),postalCode:r.string(),country:y,phoneNumber:r.string(),defaultShippingAddress:r.boolean(),defaultBillingAddress:r.boolean()}),v=r.object({id:r.string(),title:r.string(),firstName:r.string(),lastName:r.string(),phoneNumber:r.string(),emailAddress:r.string(),addresses:r.array(f),customFields:r.object({subscribedUntil:r.nullable(r.timestamp())})}),C=r.object({activeCustomer:r.nullable(v)}),A=r.object({createCustomerAddress:f}),j=r.object({updateCustomerAddress:f}),q=r.object({deleteCustomerAddress:r.object({success:r.boolean()})}),L=r.object({orderLineId:r.string(),quantity:r.number(),refundId:r.string()}),I=r.object({id:r.string(),createdAt:r.timestamp(),items:r.number(),shipping:r.number(),adjustment:r.number(),total:r.number(),method:r.string(),state:r.string(),transactionId:r.string(),reason:r.string(),lines:r.array(L),paymentId:r.string()}),$=r.object({id:r.string(),createdAt:r.timestamp(),method:r.string(),amount:r.number(),state:r.string(),transactionId:r.string(),errorMessage:r.string(),refunds:r.array(I)}),x=r.object({id:r.string(),name:r.string()}),O=r.object({description:r.string(),taxRate:r.number()}),P=r.object({id:r.string(),name:r.string(),isDefault:r.boolean()}),S=r.object({id:r.string(),name:r.string(),enabled:r.boolean(),value:r.number(),category:P,zone:x}),w=r.object({description:r.string(),taxRate:r.number(),taxBase:r.number(),taxTotal:r.number()}),k=r.object({id:r.string(),facet:r.optional(r.object({id:r.string(),name:r.string(),code:r.string()})),facetId:r.string(),name:r.string(),code:r.string()});r.object({id:r.string(),name:r.string(),code:r.string(),values:r.array(r.object({id:r.string(),facetId:r.string(),name:r.string(),code:r.string()}))});let T=r.object({id:r.string(),code:r.string(),name:r.string(),groupId:r.string(),group:r.object({id:r.string(),code:r.string(),name:r.string()})});r.object({id:r.string(),code:r.string(),name:r.string(),options:r.array(r.object({id:r.string(),code:r.string(),name:r.string(),groupId:r.string()}))}),r.object({id:r.string(),createdAt:r.timestamp(),languageCode:r.string(),name:r.string(),slug:r.string(),description:r.string(),featuredAsset:r.nullable(h),assets:r.array(h),facetValues:r.array(k),customFields:r.object({location:r.nullable(r.string()),date:r.timestamp(),matchCode:r.nullable(r.string())}),variants:r.object({totalItems:r.number(),items:r.array(r.object({id:r.string(),productId:r.string(),createdAt:r.timestamp(),languageCode:r.string(),sku:r.string(),name:r.string(),featuredAsset:r.nullable(h),assets:r.array(h),price:r.number(),currencyCode:r.string(),priceWithTax:r.number(),stockLevel:r.string(),taxRateApplied:S,taxCategory:P,options:r.array(T),facetValues:r.array(k)}))})});let M=r.object({id:r.string(),productId:r.string(),createdAt:r.timestamp(),languageCode:r.string(),sku:r.string(),name:r.string(),featuredAsset:r.nullable(h),assets:r.array(h),price:r.number(),currencyCode:r.string(),priceWithTax:r.number(),stockLevel:r.string(),taxRateApplied:S,taxCategory:P,options:r.array(T),facetValues:r.array(k),product:r.object({id:r.string(),createdAt:r.timestamp(),languageCode:r.string(),name:r.string(),slug:r.string(),description:r.string(),featuredAsset:r.nullable(h),assets:r.array(h),facetValues:r.array(k),customFields:r.object({location:r.nullable(r.string()),date:r.timestamp(),matchCode:r.nullable(r.string())})})}),N=r.object({id:r.string(),createdAt:r.timestamp(),startsAt:r.nullable(r.timestamp()),endsAt:r.nullable(r.timestamp()),couponCode:r.string(),perCustomerUsageLimit:r.nullable(r.number()),name:r.string(),description:r.string(),enabled:r.boolean()}),W=r.object({id:r.string(),createdAt:r.timestamp(),description:r.string(),sku:r.string(),taxLines:r.array(O),price:r.number(),priceWithTax:r.number(),taxRate:r.number()}),B=r.object({adjustmentSource:r.string(),type:r.string(),description:r.string(),amount:r.number(),amountWithTax:r.number()}),E=r.object({id:r.string(),productVariant:r.optional(M),featuredAsset:h,unitPrice:r.number(),unitPriceWithTax:r.number(),discountedUnitPrice:r.number(),discountedUnitPriceWithTax:r.number(),quantity:r.number(),orderPlacedQuantity:r.number(),taxRate:r.number(),linePrice:r.number(),linePriceWithTax:r.number(),discountedLinePrice:r.number(),discountedLinePriceWithTax:r.number(),proratedLinePrice:r.number(),proratedLinePriceWithTax:r.number(),lineTax:r.number(),discounts:r.array(B),taxLines:r.array(O)}),R=r.object({id:r.string(),code:r.string(),name:r.string(),description:r.string()}),U=r.object({id:r.string(),shippingMethod:R,price:r.number(),priceWithTax:r.number(),discountedPrice:r.number(),discountedPriceWithTax:r.number()}),V=r.object({fullName:r.nullable(r.string()),company:r.nullable(r.string()),streetLine1:r.nullable(r.string()),streetLine2:r.nullable(r.string()),city:r.nullable(r.string()),province:r.nullable(r.string()),postalCode:r.nullable(r.string()),country:r.nullable(r.string()),countryCode:r.nullable(r.string()),phoneNumber:r.nullable(r.string())}),D=r.object({id:r.string(),createdAt:r.timestamp(),type:r.string(),orderPlacedAt:r.nullable(r.timestamp()),code:r.string(),state:r.string(),active:r.boolean(),customer:r.nullable(v),shippingAddress:r.optional(V),billingAddress:r.optional(V),lines:r.array(E),surcharges:r.array(W),discounts:r.array(B),couponCodes:r.array(r.string()),promotions:r.array(N),payments:r.array($),totalQuantity:r.number(),subTotal:r.number(),subTotalWithTax:r.number(),currencyCode:r.string(),shippingLines:r.array(U),shipping:r.number(),shippingWithTax:r.number(),total:r.number(),totalWithTax:r.number(),taxSummary:r.array(w)});r.object({items:r.array(D),totalItems:r.number()});let H=r.object({orderByCode:r.object({state:r.string()})}),z=r.object({activeOrder:r.nullable(D)}),F=r.object({addItemToOrder:r.nullable(D)}),Q=r.object({adjustOrderLine:r.nullable(D)}),G=r.object({removeOrderLine:r.nullable(D)}),J=r.object({transitionOrderToState:r.nullable(D)}),K=r.object({applyCouponCode:r.nullable(D)}),X=r.object({id:r.string(),code:r.string(),name:r.string(),description:r.string(),isEligible:r.boolean()}),Y=r.object({id:r.string(),price:r.number(),priceWithTax:r.number(),code:r.string(),name:r.string(),description:r.string()}),Z=r.object({eligiblePaymentMethods:r.array(X)}),_=r.object({eligibleShippingMethods:r.array(Y)}),ee=r.object({setOrderShippingAddress:D}),et=r.object({setOrderShippingMethod:D}),er=r.object({createStripePaymentIntent:r.string()}),en=e=>{let t=Object.entries(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e.properties,e.optionalProperties));return 0===t.length?"":t.map(([e,t])=>"properties"in t?`${e} { ${en(t)} }`:"elements"in t&&!("type"in t.elements)?`${e} { ${en(t.elements)} }`:e).join(" ")};function ei(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function eo(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){ei(o,n,i,a,s,"next",e)}function s(e){ei(o,n,i,a,s,"throw",e)}a(void 0)})}}class ea extends p{eligiblePaymentMethods(){return eo(function*(){return this.query(Z,{query:(0,l.gql)`
                query EligiblePaymentMethods {
                    ${en(Z)}
                }
            `})}).call(this)}eligibleShippingMethods(){return eo(function*(){return this.query(_,{query:(0,l.gql)`
                query EligibleShippingMethods {
                    ${en(_)}
                }
            `})}).call(this)}setOrderShippingAddress(e){return eo(function*(){return this.mutate(ee,{mutation:(0,l.gql)`
                mutation SetOrderShippingAddress($input: CreateAddressInput!) {
                    setOrderShippingAddress(input: $input) {
                        ... on Order {
                            ${en(D)}
                        }
                    }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}).call(this)}setOrderShippingMethod(e){return eo(function*(){return this.mutate(et,{mutation:(0,l.gql)`
                mutation SetOrderShippingMethod($id: [ID!]!) {
                    setOrderShippingMethod(shippingMethodId: $id) {
                        ... on Order {
                            ${en(D)}
                        }
                    }
                }
            `,variables:{id:[e]}})}).call(this)}createStripePaymentIntent(){return eo(function*(){return this.mutate(er,{mutation:(0,l.gql)`
                mutation CreateStripePaymentIntent {
                    createStripePaymentIntent
                }
            `})}).call(this)}}let es=r.object({id:r.string(),name:r.string(),slug:r.string()}),eu=r.object({id:r.string(),createdAt:r.timestamp(),languageCode:r.string(),name:r.string(),slug:r.string(),breadcrumbs:r.array(es),position:r.number(),description:r.string(),featuredAsset:r.nullable(h),assets:r.array(h),parentId:r.string(),productVariants:r.object({totalItems:r.number(),items:r.array(M)})}),el=r.object({collection:eu});function ec(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}class ed extends p{getCollectionById(e){var t;return(t=function*(){return this.query(el,{query:(0,l.gql)`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${en(eu)}
                    }
                }
            `,variables:{id:e}})},function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(e){ec(o,n,i,a,s,"next",e)}function s(e){ec(o,n,i,a,s,"throw",e)}a(void 0)})}).call(this)}}function ep(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function em(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){ep(o,n,i,a,s,"next",e)}function s(e){ep(o,n,i,a,s,"throw",e)}a(void 0)})}}class eg extends p{getActiveCustomer(){return em(function*(){return this.query(C,{query:(0,l.gql)`
                query GetActiveCustomer {
                    ${en(C)}
                }
            `})}).call(this)}createCustomerAddress(e){return em(function*(){return this.mutate(A,{mutation:(0,l.gql)`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ${en(f)}
                   }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}).call(this)}updateCustomerAddress(e){return em(function*(){return this.mutate(j,{mutation:(0,l.gql)`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        ${en(f)}
                   }
                }
            `,variables:{input:{id:e.id,fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}).call(this)}deleteCustomerAddress(e){return em(function*(){return this.mutate(q,{mutation:(0,l.gql)`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,variables:{id:e}})}).call(this)}}function eb(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function eh(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){eb(o,n,i,a,s,"next",e)}function s(e){eb(o,n,i,a,s,"throw",e)}a(void 0)})}}class ey extends p{getByCode(e){return eh(function*(){return this.query(H,{query:(0,l.gql)`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        ${en(D)}
                    }
                }
            `,variables:{code:e}})}).call(this)}getActiveOrder(){return eh(function*(){return this.query(z,{query:(0,l.gql)`
                query GetActiveOrder {
                        ${en(z)}
                }
            `})}).call(this)}transitionOrderToState(e){return eh(function*(){return this.mutate(J,{mutation:(0,l.gql)`
                mutation TransitionOrderToState($state: String!) {
                    transitionOrderToState(state: $state) {
                        ... on Order {
                            ${en(D)}
                        }
                    }
                }
            `,variables:{state:e}})}).call(this)}addItemToOrder(e,t){return eh(function*(){return this.mutate(F,{mutation:(0,l.gql)`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ... on Order {
                            ${en(D)}
                        }
                    }
                }
            `,variables:{productVariantId:e,quantity:t}})}).call(this)}adjustOrderLine(e,t){return eh(function*(){return this.mutate(Q,{mutation:(0,l.gql)`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        ... on Order {
                            ${en(D)}
                        }
                    }
                }
            `,variables:{orderLineId:e,quantity:t}})}).call(this)}removeOrderLine(e){return eh(function*(){return this.mutate(G,{mutation:(0,l.gql)`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        ... on Order {
                            ${en(D)}
                        }
                    }
                }
            `,variables:{orderLineId:e}})}).call(this)}applyCouponCode(e){return eh(function*(){return this.mutate(K,{mutation:(0,l.gql)`
                mutation ApplyCouponCode($couponCode: String!) {
                    applyCouponCode(couponCode: $couponCode) {
                        ... on Order {
                            ${en(D)}
                        }
                    }
                }
            `,variables:{couponCode:e}})}).call(this)}}let ef=r.object({availableCountries:r.array(y)});function ev(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}class eC extends p{availableCountries(){var e;return(e=function*(){return this.query(ef,{query:(0,l.gql)`
                query AvailableCountries {
                    availableCountries {
                        ${en(y)}
                    }
                }
            `})},function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){ev(o,n,i,a,s,"next",e)}function s(e){ev(o,n,i,a,s,"throw",e)}a(void 0)})}).call(this)}}function eA(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ej{authHandler(e,t){let r=this.getAuthToken(),n=r?`Bearer ${r}`:null;return e.setContext({headers:{authorization:n}}),t(e).pipe(t=>{let{response:{headers:r}}=e.getContext(),n=r.get("vendure-auth-token");return this.saveAuthToken(n),t})}getAuthToken(){return"undefined"!=typeof localStorage?localStorage.getItem("vendure-auth-token"):null}saveAuthToken(e){e&&"undefined"!=typeof localStorage&&localStorage.setItem("vendure-auth-token",e)}createApolloClient(e){let t=new l.HttpLink({uri:e}),r=new l.ApolloLink((e,t)=>this.authHandler(e,t));return new l.ApolloClient({cache:new l.InMemoryCache,link:(0,l.concat)(r,t),defaultOptions:{query:{fetchPolicy:"no-cache",errorPolicy:"all"},watchQuery:{fetchPolicy:"no-cache",errorPolicy:"all"}}})}constructor(e){eA(this,"auth",void 0),eA(this,"customer",void 0),eA(this,"collection",void 0),eA(this,"checkout",void 0),eA(this,"utils",void 0),eA(this,"order",void 0),eA(this,"apolloClient",void 0),this.apolloClient=this.createApolloClient(e.apiUri),this.order=new ey(this.apolloClient),this.customer=new eg(this.apolloClient),this.collection=new ed(this.apolloClient),this.checkout=new ea(this.apolloClient),this.utils=new eC(this.apolloClient),this.auth=new b(this.apolloClient)}}export{ej as VendureClient};