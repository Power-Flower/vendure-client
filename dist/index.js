import*as e from"@apollo/client/core/core.cjs";import*as t from"@apollo/client/link/core/core.cjs";import*as r from"@apollo/client/link/http/http.cjs";import{a as n}from"@arrirpc/schema";var i={"./src/types/astro.types.ts":function(e,t,r){var n=r("@apollo/client/core/core.cjs");r.o(n,"ApolloLink")&&r.d(t,{ApolloLink:function(){return n.ApolloLink}}),r.o(n,"HttpLink")&&r.d(t,{HttpLink:function(){return n.HttpLink}}),r.o(n,"ApolloClient")&&r.d(t,{ApolloClient:function(){return n.ApolloClient}}),r.o(n,"InMemoryCache")&&r.d(t,{InMemoryCache:function(){return n.InMemoryCache}}),r.o(n,"concat")&&r.d(t,{concat:function(){return n.concat}}),r.o(n,"gql")&&r.d(t,{gql:function(){return n.gql}});var i=r("@apollo/client/link/core/core.cjs");r.o(i,"ApolloLink")&&r.d(t,{ApolloLink:function(){return i.ApolloLink}}),r.o(i,"HttpLink")&&r.d(t,{HttpLink:function(){return i.HttpLink}}),r.o(i,"ApolloClient")&&r.d(t,{ApolloClient:function(){return i.ApolloClient}}),r.o(i,"InMemoryCache")&&r.d(t,{InMemoryCache:function(){return i.InMemoryCache}}),r.o(i,"concat")&&r.d(t,{concat:function(){return i.concat}}),r.o(i,"gql")&&r.d(t,{gql:function(){return i.gql}});var o=r("@apollo/client/link/http/http.cjs");r.o(o,"ApolloLink")&&r.d(t,{ApolloLink:function(){return o.ApolloLink}}),r.o(o,"HttpLink")&&r.d(t,{HttpLink:function(){return o.HttpLink}}),r.o(o,"ApolloClient")&&r.d(t,{ApolloClient:function(){return o.ApolloClient}}),r.o(o,"InMemoryCache")&&r.d(t,{InMemoryCache:function(){return o.InMemoryCache}}),r.o(o,"concat")&&r.d(t,{concat:function(){return o.concat}}),r.o(o,"gql")&&r.d(t,{gql:function(){return o.gql}})},"@apollo/client/core/core.cjs":function(t){t.exports=e},"@apollo/client/link/core/core.cjs":function(e){e.exports=t},"@apollo/client/link/http/http.cjs":function(e){e.exports=r}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return i[e](r,r.exports,a),r.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=n.object({login:n.object({id:n.string(),identifier:n.string()})}),u=n.object({registerCustomerAccount:n.object({success:n.boolean()})}),l=n.object({logout:n.object({success:n.boolean()})});var c=a("./src/types/astro.types.ts");function d(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){d(o,n,i,a,s,"next",e)}function s(e){d(o,n,i,a,s,"throw",e)}a(void 0)})}}class m{query(e,t){return p(function*(){try{let r=yield this.client.query(t),i=n.parse(e,r.data);if(i.success)return{data:i.value};return{error:i.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}).call(this)}mutate(e,t){return p(function*(){try{let r=yield this.client.mutate(t),i=n.parse(e,r.data);if(i.success)return{data:i.value};return{error:i.errors}}catch(e){if(e instanceof Error)return{error:e};return{error:Error("Unknown error")}}}).call(this)}constructor(e){var t,r;r=void 0,(t="client")in this?Object.defineProperty(this,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[t]=r,this.client=e}}function g(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function b(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){g(o,n,i,a,s,"next",e)}function s(e){g(o,n,i,a,s,"throw",e)}a(void 0)})}}class h extends m{login(e,t){return b(function*(){return this.mutate(s,{mutation:(0,c.gql)`
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
            `,variables:{email:e,password:t}})}).call(this)}register(e,t,r,n){return b(function*(){return this.mutate(u,{mutation:(0,c.gql)`
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
            `,variables:{input:{firstName:e,lastName:t,email:r,password:n}}})}).call(this)}logout(){return b(function*(){return this.mutate(l,{mutation:(0,c.gql)`
                mutation Logout {
                    logout {
                        success
                    }
                }
            `})}).call(this)}}let y=n.object({id:n.string(),createdAt:n.string(),name:n.string(),type:n.string(),fileSize:n.number(),mimeType:n.string(),width:n.number(),height:n.number(),source:n.string(),preview:n.string()}),f=n.object({id:n.string(),code:n.string(),name:n.string(),enabled:n.boolean()}),v=n.object({id:n.string(),fullName:n.string(),company:n.string(),streetLine1:n.string(),streetLine2:n.string(),city:n.string(),province:n.string(),postalCode:n.string(),country:f,phoneNumber:n.string(),defaultShippingAddress:n.boolean(),defaultBillingAddress:n.boolean()}),C=n.object({id:n.string(),title:n.string(),firstName:n.string(),lastName:n.string(),phoneNumber:n.string(),emailAddress:n.string(),addresses:n.array(v),customFields:n.object({subscribedUntil:n.nullable(n.timestamp())})}),j=n.object({activeCustomer:n.nullable(C)}),A=n.object({createCustomerAddress:v}),q=n.object({updateCustomerAddress:v}),L=n.object({deleteCustomerAddress:n.object({success:n.boolean()})}),I=n.object({orderLineId:n.string(),quantity:n.number(),refundId:n.string()}),$=n.object({id:n.string(),createdAt:n.timestamp(),items:n.number(),shipping:n.number(),adjustment:n.number(),total:n.number(),method:n.string(),state:n.string(),transactionId:n.string(),reason:n.string(),lines:n.array(I),paymentId:n.string()}),x=n.object({id:n.string(),createdAt:n.timestamp(),method:n.string(),amount:n.number(),state:n.string(),transactionId:n.string(),errorMessage:n.string(),refunds:n.array($)}),O=n.object({id:n.string(),name:n.string()}),P=n.object({description:n.string(),taxRate:n.number()}),k=n.object({id:n.string(),name:n.string(),isDefault:n.boolean()}),S=n.object({id:n.string(),name:n.string(),enabled:n.boolean(),value:n.number(),category:k,zone:O}),w=n.object({description:n.string(),taxRate:n.number(),taxBase:n.number(),taxTotal:n.number()}),T=n.object({id:n.string(),facet:n.optional(n.object({id:n.string(),name:n.string(),code:n.string()})),facetId:n.string(),name:n.string(),code:n.string()});n.object({id:n.string(),name:n.string(),code:n.string(),values:n.array(n.object({id:n.string(),facetId:n.string(),name:n.string(),code:n.string()}))});let M=n.object({id:n.string(),code:n.string(),name:n.string(),groupId:n.string(),group:n.object({id:n.string(),code:n.string(),name:n.string()})});n.object({id:n.string(),code:n.string(),name:n.string(),options:n.array(n.object({id:n.string(),code:n.string(),name:n.string(),groupId:n.string()}))}),n.object({id:n.string(),createdAt:n.timestamp(),languageCode:n.string(),name:n.string(),slug:n.string(),description:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),facetValues:n.array(T),customFields:n.object({location:n.nullable(n.string()),date:n.timestamp(),matchCode:n.nullable(n.string())}),variants:n.object({totalItems:n.number(),items:n.array(n.object({id:n.string(),productId:n.string(),createdAt:n.timestamp(),languageCode:n.string(),sku:n.string(),name:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),price:n.number(),currencyCode:n.string(),priceWithTax:n.number(),stockLevel:n.string(),taxRateApplied:S,taxCategory:k,options:n.array(M),facetValues:n.array(T)}))})});let N=n.object({id:n.string(),productId:n.string(),createdAt:n.timestamp(),languageCode:n.string(),sku:n.string(),name:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),price:n.number(),currencyCode:n.string(),priceWithTax:n.number(),stockLevel:n.string(),taxRateApplied:S,taxCategory:k,options:n.array(M),facetValues:n.array(T),product:n.object({id:n.string(),createdAt:n.timestamp(),languageCode:n.string(),name:n.string(),slug:n.string(),description:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),facetValues:n.array(T),customFields:n.object({location:n.nullable(n.string()),date:n.timestamp(),matchCode:n.nullable(n.string())})})}),W=n.object({id:n.string(),createdAt:n.timestamp(),startsAt:n.nullable(n.timestamp()),endsAt:n.nullable(n.timestamp()),couponCode:n.string(),perCustomerUsageLimit:n.nullable(n.number()),name:n.string(),description:n.string(),enabled:n.boolean()}),B=n.object({id:n.string(),createdAt:n.timestamp(),description:n.string(),sku:n.string(),taxLines:n.array(P),price:n.number(),priceWithTax:n.number(),taxRate:n.number()}),H=n.object({adjustmentSource:n.string(),type:n.string(),description:n.string(),amount:n.number(),amountWithTax:n.number()}),E=n.object({id:n.string(),productVariant:n.optional(N),featuredAsset:y,unitPrice:n.number(),unitPriceWithTax:n.number(),discountedUnitPrice:n.number(),discountedUnitPriceWithTax:n.number(),quantity:n.number(),orderPlacedQuantity:n.number(),taxRate:n.number(),linePrice:n.number(),linePriceWithTax:n.number(),discountedLinePrice:n.number(),discountedLinePriceWithTax:n.number(),proratedLinePrice:n.number(),proratedLinePriceWithTax:n.number(),lineTax:n.number(),discounts:n.array(H),taxLines:n.array(P)}),R=n.object({id:n.string(),code:n.string(),name:n.string(),description:n.string()}),U=n.object({id:n.string(),shippingMethod:R,price:n.number(),priceWithTax:n.number(),discountedPrice:n.number(),discountedPriceWithTax:n.number()}),V=n.object({fullName:n.nullable(n.string()),company:n.nullable(n.string()),streetLine1:n.nullable(n.string()),streetLine2:n.nullable(n.string()),city:n.nullable(n.string()),province:n.nullable(n.string()),postalCode:n.nullable(n.string()),country:n.nullable(n.string()),countryCode:n.nullable(n.string()),phoneNumber:n.nullable(n.string())}),D=n.object({id:n.string(),createdAt:n.timestamp(),type:n.string(),orderPlacedAt:n.nullable(n.timestamp()),code:n.string(),state:n.string(),active:n.boolean(),customer:n.nullable(C),shippingAddress:n.optional(V),billingAddress:n.optional(V),lines:n.array(E),surcharges:n.array(B),discounts:n.array(H),couponCodes:n.array(n.string()),promotions:n.array(W),payments:n.array(x),totalQuantity:n.number(),subTotal:n.number(),subTotalWithTax:n.number(),currencyCode:n.string(),shippingLines:n.array(U),shipping:n.number(),shippingWithTax:n.number(),total:n.number(),totalWithTax:n.number(),taxSummary:n.array(w)});n.object({items:n.array(D),totalItems:n.number()});let z=n.object({orderByCode:n.object({state:n.string()})}),F=n.object({activeOrder:n.nullable(D)}),Q=n.object({addItemToOrder:n.nullable(D)}),G=n.object({adjustOrderLine:n.nullable(D)}),J=n.object({removeOrderLine:n.nullable(D)}),K=n.object({transitionOrderToState:n.nullable(D)}),X=n.object({applyCouponCode:n.nullable(D)}),Y=n.object({id:n.string(),code:n.string(),name:n.string(),description:n.string(),isEligible:n.boolean()}),Z=n.object({id:n.string(),price:n.number(),priceWithTax:n.number(),code:n.string(),name:n.string(),description:n.string()}),_=n.object({eligiblePaymentMethods:n.array(Y)}),ee=n.object({eligibleShippingMethods:n.array(Z)}),et=n.object({setOrderShippingAddress:D}),er=n.object({setOrderShippingMethod:D}),en=n.object({createStripePaymentIntent:n.string()}),ei=e=>{let t=Object.entries(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e.properties,e.optionalProperties));return 0===t.length?"":t.map(([e,t])=>"properties"in t?`${e} { ${ei(t)} }`:"elements"in t&&!("type"in t.elements)?`${e} { ${ei(t.elements)} }`:e).join(" ")};function eo(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function ea(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){eo(o,n,i,a,s,"next",e)}function s(e){eo(o,n,i,a,s,"throw",e)}a(void 0)})}}class es extends m{eligiblePaymentMethods(){return ea(function*(){return this.query(_,{query:(0,c.gql)`
                query EligiblePaymentMethods {
                    ${ei(_)}
                }
            `})}).call(this)}eligibleShippingMethods(){return ea(function*(){return this.query(ee,{query:(0,c.gql)`
                query EligibleShippingMethods {
                    ${ei(ee)}
                }
            `})}).call(this)}setOrderShippingAddress(e){return ea(function*(){return this.mutate(et,{mutation:(0,c.gql)`
                mutation SetOrderShippingAddress($input: CreateAddressInput!) {
                    setOrderShippingAddress(input: $input) {
                        ... on Order {
                            ${ei(D)}
                        }
                    }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}).call(this)}setOrderShippingMethod(e){return ea(function*(){return this.mutate(er,{mutation:(0,c.gql)`
                mutation SetOrderShippingMethod($id: [ID!]!) {
                    setOrderShippingMethod(shippingMethodId: $id) {
                        ... on Order {
                            ${ei(D)}
                        }
                    }
                }
            `,variables:{id:[e]}})}).call(this)}createStripePaymentIntent(){return ea(function*(){return this.mutate(en,{mutation:(0,c.gql)`
                mutation CreateStripePaymentIntent {
                    createStripePaymentIntent
                }
            `})}).call(this)}}let eu=n.object({id:n.string(),name:n.string(),slug:n.string()}),el=n.object({id:n.string(),createdAt:n.timestamp(),languageCode:n.string(),name:n.string(),slug:n.string(),breadcrumbs:n.array(eu),position:n.number(),description:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),parentId:n.string(),productVariants:n.object({totalItems:n.number(),items:n.array(N)})}),ec=n.object({collection:el});function ed(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}class ep extends m{getCollectionById(e){var t;return(t=function*(){return this.query(ec,{query:(0,c.gql)`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${ei(el)}
                    }
                }
            `,variables:{id:e}})},function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(e){ed(o,n,i,a,s,"next",e)}function s(e){ed(o,n,i,a,s,"throw",e)}a(void 0)})}).call(this)}}function em(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function eg(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){em(o,n,i,a,s,"next",e)}function s(e){em(o,n,i,a,s,"throw",e)}a(void 0)})}}class eb extends m{getActiveCustomer(){return eg(function*(){return this.query(j,{query:(0,c.gql)`
                query GetActiveCustomer {
                    ${ei(j)}
                }
            `})}).call(this)}createCustomerAddress(e){return eg(function*(){return this.mutate(A,{mutation:(0,c.gql)`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ${ei(v)}
                   }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}).call(this)}updateCustomerAddress(e){return eg(function*(){return this.mutate(q,{mutation:(0,c.gql)`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        ${ei(v)}
                   }
                }
            `,variables:{input:{id:e.id,fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}})}).call(this)}deleteCustomerAddress(e){return eg(function*(){return this.mutate(L,{mutation:(0,c.gql)`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,variables:{id:e}})}).call(this)}}function eh(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function ey(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){eh(o,n,i,a,s,"next",e)}function s(e){eh(o,n,i,a,s,"throw",e)}a(void 0)})}}class ef extends m{getByCode(e){return ey(function*(){return this.query(z,{query:(0,c.gql)`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        ${ei(D)}
                    }
                }
            `,variables:{code:e}})}).call(this)}getActiveOrder(){return ey(function*(){return this.query(F,{query:(0,c.gql)`
                query GetActiveOrder {
                        ${ei(F)}
                }
            `})}).call(this)}transitionOrderToState(e){return ey(function*(){return this.mutate(K,{mutation:(0,c.gql)`
                mutation TransitionOrderToState($state: String!) {
                    transitionOrderToState(state: $state) {
                        ... on Order {
                            ${ei(D)}
                        }
                    }
                }
            `,variables:{state:e}})}).call(this)}addItemToOrder(e,t){return ey(function*(){return this.mutate(Q,{mutation:(0,c.gql)`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ... on Order {
                            ${ei(D)}
                        }
                    }
                }
            `,variables:{productVariantId:e,quantity:t}})}).call(this)}adjustOrderLine(e,t){return ey(function*(){return this.mutate(G,{mutation:(0,c.gql)`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        ... on Order {
                            ${ei(D)}
                        }
                    }
                }
            `,variables:{orderLineId:e,quantity:t}})}).call(this)}removeOrderLine(e){return ey(function*(){return this.mutate(J,{mutation:(0,c.gql)`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        ... on Order {
                            ${ei(D)}
                        }
                    }
                }
            `,variables:{orderLineId:e}})}).call(this)}applyCouponCode(e){return ey(function*(){return this.mutate(X,{mutation:(0,c.gql)`
                mutation ApplyCouponCode($couponCode: String!) {
                    applyCouponCode(couponCode: $couponCode) {
                        ... on Order {
                            ${ei(D)}
                        }
                    }
                }
            `,variables:{couponCode:e}})}).call(this)}}let ev=n.object({availableCountries:n.array(f)});function eC(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}class ej extends m{availableCountries(){var e;return(e=function*(){return this.query(ev,{query:(0,c.gql)`
                query AvailableCountries {
                    availableCountries {
                        ${ei(f)}
                    }
                }
            `})},function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){eC(o,n,i,a,s,"next",e)}function s(e){eC(o,n,i,a,s,"throw",e)}a(void 0)})}).call(this)}}function eA(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class eq{authHandler(e,t){let r=this.getAuthToken(),n=r?`Bearer ${r}`:null;return e.setContext({headers:{authorization:n}}),t(e).map(t=>{let{response:{headers:r}}=e.getContext(),n=r.get("vendure-auth-token");return this.saveAuthToken(n),t})}getAuthToken(){return"undefined"!=typeof localStorage?localStorage.getItem("vendure-auth-token"):null}saveAuthToken(e){e&&"undefined"!=typeof localStorage&&localStorage.setItem("vendure-auth-token",e)}createApolloClient(e){let t=new c.HttpLink({uri:e}),r=new c.ApolloLink((e,t)=>this.authHandler(e,t));return new c.ApolloClient({cache:new c.InMemoryCache,link:(0,c.concat)(r,t),defaultOptions:{query:{fetchPolicy:"no-cache",errorPolicy:"all"},watchQuery:{fetchPolicy:"no-cache",errorPolicy:"all"}}})}constructor(e){eA(this,"auth",void 0),eA(this,"customer",void 0),eA(this,"collection",void 0),eA(this,"checkout",void 0),eA(this,"utils",void 0),eA(this,"order",void 0),eA(this,"apolloClient",void 0),this.apolloClient=this.createApolloClient(e.apiUri),this.order=new ef(this.apolloClient),this.customer=new eb(this.apolloClient),this.collection=new ep(this.apolloClient),this.checkout=new es(this.apolloClient),this.utils=new ej(this.apolloClient),this.auth=new h(this.apolloClient)}}export{eq as VendureClient};