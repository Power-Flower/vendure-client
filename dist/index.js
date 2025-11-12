import*as t from"@apollo/client/core/core.cjs";import*as e from"@apollo/client/link/core/core.cjs";import*as r from"@apollo/client/link/http/http.cjs";import{a as n}from"@arrirpc/schema";var i={"./src/types/astro.types.ts":function(t,e,r){var n=r("@apollo/client/core/core.cjs");r.o(n,"ApolloLink")&&r.d(e,{ApolloLink:function(){return n.ApolloLink}}),r.o(n,"HttpLink")&&r.d(e,{HttpLink:function(){return n.HttpLink}}),r.o(n,"ApolloClient")&&r.d(e,{ApolloClient:function(){return n.ApolloClient}}),r.o(n,"InMemoryCache")&&r.d(e,{InMemoryCache:function(){return n.InMemoryCache}}),r.o(n,"concat")&&r.d(e,{concat:function(){return n.concat}}),r.o(n,"gql")&&r.d(e,{gql:function(){return n.gql}});var i=r("@apollo/client/link/core/core.cjs");r.o(i,"ApolloLink")&&r.d(e,{ApolloLink:function(){return i.ApolloLink}}),r.o(i,"HttpLink")&&r.d(e,{HttpLink:function(){return i.HttpLink}}),r.o(i,"ApolloClient")&&r.d(e,{ApolloClient:function(){return i.ApolloClient}}),r.o(i,"InMemoryCache")&&r.d(e,{InMemoryCache:function(){return i.InMemoryCache}}),r.o(i,"concat")&&r.d(e,{concat:function(){return i.concat}}),r.o(i,"gql")&&r.d(e,{gql:function(){return i.gql}});var o=r("@apollo/client/link/http/http.cjs");r.o(o,"ApolloLink")&&r.d(e,{ApolloLink:function(){return o.ApolloLink}}),r.o(o,"HttpLink")&&r.d(e,{HttpLink:function(){return o.HttpLink}}),r.o(o,"ApolloClient")&&r.d(e,{ApolloClient:function(){return o.ApolloClient}}),r.o(o,"InMemoryCache")&&r.d(e,{InMemoryCache:function(){return o.InMemoryCache}}),r.o(o,"concat")&&r.d(e,{concat:function(){return o.concat}}),r.o(o,"gql")&&r.d(e,{gql:function(){return o.gql}})},"@apollo/client/core/core.cjs":function(e){e.exports=t},"@apollo/client/link/core/core.cjs":function(t){t.exports=e},"@apollo/client/link/http/http.cjs":function(t){t.exports=r}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return i[t](r,r.exports,a),r.exports}a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let s=n.object({login:n.object({id:n.string(),identifier:n.string()})}),u=n.object({registerCustomerAccount:n.object({success:n.boolean()})}),l=n.object({logout:n.object({success:n.boolean()})});var c=a("./src/types/astro.types.ts");function d(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){r(t);return}s.done?e(u):Promise.resolve(u).then(n,i)}function p(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t){d(o,n,i,a,s,"next",t)}function s(t){d(o,n,i,a,s,"throw",t)}a(void 0)})}}class m{query(t,e){return p(function*(){try{let r=yield this.client.query(e),i=n.parse(t,r.data);if(i.success)return{data:i.value};return{error:i.errors}}catch(t){if(t instanceof Error)return{error:t};return{error:Error("Unknown error")}}}).call(this)}mutate(t,e){return p(function*(){try{let r=yield this.client.mutate(e),i=n.parse(t,r.data);if(i.success)return{data:i.value};return{error:i.errors}}catch(t){if(t instanceof Error)return{error:t};return{error:Error("Unknown error")}}}).call(this)}constructor(t){var e,r;r=void 0,(e="client")in this?Object.defineProperty(this,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[e]=r,this.client=t}}function g(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){r(t);return}s.done?e(u):Promise.resolve(u).then(n,i)}function b(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t){g(o,n,i,a,s,"next",t)}function s(t){g(o,n,i,a,s,"throw",t)}a(void 0)})}}class h extends m{login(t,e){return b(function*(){return this.mutate(s,{mutation:(0,c.gql)`
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
            `,variables:{email:t,password:e}})}).call(this)}register(t,e,r,n){return b(function*(){return this.mutate(u,{mutation:(0,c.gql)`
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
            `,variables:{input:{firstName:t,lastName:e,email:r,password:n}}})}).call(this)}logout(){return b(function*(){return this.mutate(l,{mutation:(0,c.gql)`
                mutation Logout {
                    logout {
                        success
                    }
                }
            `})}).call(this)}}let y=n.object({id:n.string(),createdAt:n.string(),name:n.string(),type:n.string(),fileSize:n.number(),mimeType:n.string(),width:n.number(),height:n.number(),source:n.string(),preview:n.string()}),f=n.object({id:n.string(),code:n.string(),name:n.string(),enabled:n.boolean()}),v=n.object({id:n.string(),fullName:n.string(),company:n.string(),streetLine1:n.string(),streetLine2:n.string(),city:n.string(),province:n.string(),postalCode:n.string(),country:f,phoneNumber:n.string(),defaultShippingAddress:n.boolean(),defaultBillingAddress:n.boolean()}),C=n.object({id:n.string(),title:n.string(),firstName:n.string(),lastName:n.string(),phoneNumber:n.string(),emailAddress:n.string(),addresses:n.array(v),customFields:n.object({subscribedUntil:n.nullable(n.timestamp())})}),j=n.object({activeCustomer:n.nullable(C)}),A=n.object({createCustomerAddress:v}),q=n.object({updateCustomerAddress:v}),L=n.object({deleteCustomerAddress:n.object({success:n.boolean()})}),I=n.object({orderLineId:n.string(),quantity:n.number(),refundId:n.string()}),$=n.object({id:n.string(),createdAt:n.timestamp(),items:n.number(),shipping:n.number(),adjustment:n.number(),total:n.number(),method:n.string(),state:n.string(),transactionId:n.string(),reason:n.string(),lines:n.array(I),paymentId:n.string()}),O=n.object({id:n.string(),createdAt:n.timestamp(),method:n.string(),amount:n.number(),state:n.string(),transactionId:n.string(),errorMessage:n.string(),refunds:n.array($)}),P=n.object({id:n.string(),name:n.string()}),x=n.object({description:n.string(),taxRate:n.number()}),k=n.object({id:n.string(),name:n.string(),isDefault:n.boolean()}),S=n.object({id:n.string(),name:n.string(),enabled:n.boolean(),value:n.number(),category:k,zone:P}),w=n.object({description:n.string(),taxRate:n.number(),taxBase:n.number(),taxTotal:n.number()}),T=n.object({id:n.string(),facet:n.optional(n.object({id:n.string(),name:n.string(),code:n.string()})),facetId:n.string(),name:n.string(),code:n.string()});n.object({id:n.string(),name:n.string(),code:n.string(),values:n.array(n.object({id:n.string(),facetId:n.string(),name:n.string(),code:n.string()}))});let M=n.object({id:n.string(),code:n.string(),name:n.string(),groupId:n.string(),group:n.object({id:n.string(),code:n.string(),name:n.string()})});n.object({id:n.string(),code:n.string(),name:n.string(),options:n.array(n.object({id:n.string(),code:n.string(),name:n.string(),groupId:n.string()}))}),n.object({id:n.string(),createdAt:n.timestamp(),languageCode:n.string(),name:n.string(),slug:n.string(),description:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),facetValues:n.array(T),customFields:n.object({location:n.nullable(n.string()),date:n.timestamp(),matchCode:n.nullable(n.string())}),variants:n.object({totalItems:n.number(),items:n.array(n.object({id:n.string(),productId:n.string(),createdAt:n.timestamp(),languageCode:n.string(),sku:n.string(),name:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),price:n.number(),currencyCode:n.string(),priceWithTax:n.number(),stockLevel:n.string(),taxRateApplied:S,taxCategory:k,options:n.array(M),facetValues:n.array(T)}))})});let N=n.object({id:n.string(),productId:n.string(),createdAt:n.timestamp(),languageCode:n.string(),sku:n.string(),name:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),price:n.number(),currencyCode:n.string(),priceWithTax:n.number(),stockLevel:n.string(),taxRateApplied:S,taxCategory:k,options:n.array(M),facetValues:n.array(T),product:n.object({id:n.string(),createdAt:n.timestamp(),languageCode:n.string(),name:n.string(),slug:n.string(),description:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),facetValues:n.array(T),customFields:n.object({location:n.nullable(n.string()),date:n.timestamp(),matchCode:n.nullable(n.string())})})}),W=n.object({id:n.string(),createdAt:n.timestamp(),startsAt:n.nullable(n.timestamp()),endsAt:n.nullable(n.timestamp()),couponCode:n.string(),perCustomerUsageLimit:n.nullable(n.number()),name:n.string(),description:n.string(),enabled:n.boolean()}),B=n.object({id:n.string(),createdAt:n.timestamp(),description:n.string(),sku:n.string(),taxLines:n.array(x),price:n.number(),priceWithTax:n.number(),taxRate:n.number()}),H=n.object({adjustmentSource:n.string(),type:n.string(),description:n.string(),amount:n.number(),amountWithTax:n.number()}),E=n.object({id:n.string(),productVariant:n.optional(N),featuredAsset:y,unitPrice:n.number(),unitPriceWithTax:n.number(),discountedUnitPrice:n.number(),discountedUnitPriceWithTax:n.number(),quantity:n.number(),orderPlacedQuantity:n.number(),taxRate:n.number(),linePrice:n.number(),linePriceWithTax:n.number(),discountedLinePrice:n.number(),discountedLinePriceWithTax:n.number(),proratedLinePrice:n.number(),proratedLinePriceWithTax:n.number(),lineTax:n.number(),discounts:n.array(H),taxLines:n.array(x)}),R=n.object({id:n.string(),code:n.string(),name:n.string(),description:n.string()}),U=n.object({id:n.string(),shippingMethod:R,price:n.number(),priceWithTax:n.number(),discountedPrice:n.number(),discountedPriceWithTax:n.number()}),V=n.object({fullName:n.nullable(n.string()),company:n.nullable(n.string()),streetLine1:n.nullable(n.string()),streetLine2:n.nullable(n.string()),city:n.nullable(n.string()),province:n.nullable(n.string()),postalCode:n.nullable(n.string()),country:n.nullable(n.string()),countryCode:n.nullable(n.string()),phoneNumber:n.nullable(n.string())}),D=n.object({id:n.string(),createdAt:n.timestamp(),type:n.string(),orderPlacedAt:n.nullable(n.timestamp()),code:n.string(),state:n.string(),active:n.boolean(),customer:n.nullable(C),shippingAddress:n.optional(V),billingAddress:n.optional(V),lines:n.array(E),surcharges:n.array(B),discounts:n.array(H),couponCodes:n.array(n.string()),promotions:n.array(W),payments:n.array(O),totalQuantity:n.number(),subTotal:n.number(),subTotalWithTax:n.number(),currencyCode:n.string(),shippingLines:n.array(U),shipping:n.number(),shippingWithTax:n.number(),total:n.number(),totalWithTax:n.number(),taxSummary:n.array(w)});n.object({items:n.array(D),totalItems:n.number()});let z=n.object({orderByCode:n.object({state:n.string()})}),F=n.object({activeOrder:n.nullable(D)}),Q=n.object({addItemToOrder:n.nullable(D)}),G=n.object({adjustOrderLine:n.nullable(D)}),J=n.object({removeOrderLine:n.nullable(D)}),K=n.object({transitionOrderToState:n.nullable(D)}),X=n.object({applyCouponCode:n.nullable(D)}),Y=n.object({id:n.string(),code:n.string(),name:n.string(),description:n.string(),isEligible:n.boolean()}),Z=n.object({id:n.string(),price:n.number(),priceWithTax:n.number(),code:n.string(),name:n.string(),description:n.string()}),_=n.object({eligiblePaymentMethods:n.array(Y)}),tt=n.object({eligibleShippingMethods:n.array(Z)}),te=n.object({setOrderShippingAddress:D}),tr=n.object({setOrderShippingMethod:D}),tn=n.object({addPaymentToOrder:D}),ti=n.object({createStripePaymentIntent:n.string()}),to=t=>{let e=Object.entries(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){var n;n=r[e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n})}return t}({},t.properties,t.optionalProperties));return 0===e.length?"":e.map(([t,e])=>"properties"in e?`${t} { ${to(e)} }`:"elements"in e&&!("type"in e.elements)?`${t} { ${to(e.elements)} }`:t).join(" ")};function ta(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){r(t);return}s.done?e(u):Promise.resolve(u).then(n,i)}function ts(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t){ta(o,n,i,a,s,"next",t)}function s(t){ta(o,n,i,a,s,"throw",t)}a(void 0)})}}class tu extends m{eligiblePaymentMethods(){return ts(function*(){return this.query(_,{query:(0,c.gql)`
                query EligiblePaymentMethods {
                    ${to(_)}
                }
            `})}).call(this)}eligibleShippingMethods(){return ts(function*(){return this.query(tt,{query:(0,c.gql)`
                query EligibleShippingMethods {
                    ${to(tt)}
                }
            `})}).call(this)}setOrderShippingAddress(t){return ts(function*(){return this.mutate(te,{mutation:(0,c.gql)`
                mutation SetOrderShippingAddress($input: CreateAddressInput!) {
                    setOrderShippingAddress(input: $input) {
                        ... on Order {
                            ${to(D)}
                        }
                    }
                }
            `,variables:{input:{fullName:t.fullName,company:t.company,streetLine1:t.streetLine1,streetLine2:t.streetLine2,city:t.city,province:t.province,postalCode:t.postalCode,countryCode:t.country.code,phoneNumber:t.phoneNumber,defaultShippingAddress:t.defaultShippingAddress,defaultBillingAddress:t.defaultBillingAddress}}})}).call(this)}setOrderShippingMethod(t){return ts(function*(){return this.mutate(tr,{mutation:(0,c.gql)`
                mutation SetOrderShippingMethod($id: [ID!]!) {
                    setOrderShippingMethod(shippingMethodId: $id) {
                        ... on Order {
                            ${to(D)}
                        }
                    }
                }
            `,variables:{id:[t]}})}).call(this)}createStripePaymentIntent(){return ts(function*(){return this.mutate(ti,{mutation:(0,c.gql)`
                mutation CreateStripePaymentIntent {
                    createStripePaymentIntent
                }
            `})}).call(this)}addPaymentToOrder(t){return ts(function*(){return this.mutate(tn,{mutation:(0,c.gql)`
                mutation AddPaymentToOrder($input: PaymentInput!) {
                    addPaymentToOrder(input: $input) {
                        ... on Order {
                            ${to(D)}
                        }
                    }
                }
            `,variables:{input:{method:t}}})}).call(this)}}let tl=n.object({id:n.string(),name:n.string(),slug:n.string()}),tc=n.object({id:n.string(),createdAt:n.timestamp(),languageCode:n.string(),name:n.string(),slug:n.string(),breadcrumbs:n.array(tl),position:n.number(),description:n.string(),featuredAsset:n.nullable(y),assets:n.array(y),parentId:n.string(),productVariants:n.object({totalItems:n.number(),items:n.array(N)})}),td=n.object({collection:tc});function tp(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){r(t);return}s.done?e(u):Promise.resolve(u).then(n,i)}class tm extends m{getCollectionById(t){var e;return(e=function*(){return this.query(td,{query:(0,c.gql)`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${to(tc)}
                    }
                }
            `,variables:{id:t}})},function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(t){tp(o,n,i,a,s,"next",t)}function s(t){tp(o,n,i,a,s,"throw",t)}a(void 0)})}).call(this)}}function tg(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){r(t);return}s.done?e(u):Promise.resolve(u).then(n,i)}function tb(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t){tg(o,n,i,a,s,"next",t)}function s(t){tg(o,n,i,a,s,"throw",t)}a(void 0)})}}class th extends m{getActiveCustomer(){return tb(function*(){return this.query(j,{query:(0,c.gql)`
                query GetActiveCustomer {
                    ${to(j)}
                }
            `})}).call(this)}createCustomerAddress(t){return tb(function*(){return this.mutate(A,{mutation:(0,c.gql)`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ${to(v)}
                   }
                }
            `,variables:{input:{fullName:t.fullName,company:t.company,streetLine1:t.streetLine1,streetLine2:t.streetLine2,city:t.city,province:t.province,postalCode:t.postalCode,countryCode:t.country.code,phoneNumber:t.phoneNumber,defaultShippingAddress:t.defaultShippingAddress,defaultBillingAddress:t.defaultBillingAddress}}})}).call(this)}updateCustomerAddress(t){return tb(function*(){return this.mutate(q,{mutation:(0,c.gql)`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        ${to(v)}
                   }
                }
            `,variables:{input:{id:t.id,fullName:t.fullName,company:t.company,streetLine1:t.streetLine1,streetLine2:t.streetLine2,city:t.city,province:t.province,postalCode:t.postalCode,countryCode:t.country.code,phoneNumber:t.phoneNumber,defaultShippingAddress:t.defaultShippingAddress,defaultBillingAddress:t.defaultBillingAddress}}})}).call(this)}deleteCustomerAddress(t){return tb(function*(){return this.mutate(L,{mutation:(0,c.gql)`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,variables:{id:t}})}).call(this)}}function ty(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){r(t);return}s.done?e(u):Promise.resolve(u).then(n,i)}function tf(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t){ty(o,n,i,a,s,"next",t)}function s(t){ty(o,n,i,a,s,"throw",t)}a(void 0)})}}class tv extends m{getByCode(t){return tf(function*(){return this.query(z,{query:(0,c.gql)`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        ${to(D)}
                    }
                }
            `,variables:{code:t}})}).call(this)}getActiveOrder(){return tf(function*(){return this.query(F,{query:(0,c.gql)`
                query GetActiveOrder {
                        ${to(F)}
                }
            `})}).call(this)}transitionOrderToState(t){return tf(function*(){return this.mutate(K,{mutation:(0,c.gql)`
                mutation TransitionOrderToState($state: String!) {
                    transitionOrderToState(state: $state) {
                        ... on Order {
                            ${to(D)}
                        }
                    }
                }
            `,variables:{state:t}})}).call(this)}addItemToOrder(t,e){return tf(function*(){return this.mutate(Q,{mutation:(0,c.gql)`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ... on Order {
                            ${to(D)}
                        }
                    }
                }
            `,variables:{productVariantId:t,quantity:e}})}).call(this)}adjustOrderLine(t,e){return tf(function*(){return this.mutate(G,{mutation:(0,c.gql)`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        ... on Order {
                            ${to(D)}
                        }
                    }
                }
            `,variables:{orderLineId:t,quantity:e}})}).call(this)}removeOrderLine(t){return tf(function*(){return this.mutate(J,{mutation:(0,c.gql)`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        ... on Order {
                            ${to(D)}
                        }
                    }
                }
            `,variables:{orderLineId:t}})}).call(this)}applyCouponCode(t){return tf(function*(){return this.mutate(X,{mutation:(0,c.gql)`
                mutation ApplyCouponCode($couponCode: String!) {
                    applyCouponCode(couponCode: $couponCode) {
                        ... on Order {
                            ${to(D)}
                        }
                    }
                }
            `,variables:{couponCode:t}})}).call(this)}}let tC=n.object({availableCountries:n.array(f)});function tj(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(t){r(t);return}s.done?e(u):Promise.resolve(u).then(n,i)}class tA extends m{availableCountries(){var t;return(t=function*(){return this.query(tC,{query:(0,c.gql)`
                query AvailableCountries {
                    availableCountries {
                        ${to(f)}
                    }
                }
            `})},function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t){tj(o,n,i,a,s,"next",t)}function s(t){tj(o,n,i,a,s,"throw",t)}a(void 0)})}).call(this)}}function tq(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class tL{authHandler(t,e){let r=this.getAuthToken(),n=r?`Bearer ${r}`:null;return t.setContext({headers:{authorization:n}}),e(t).map(e=>{let{response:{headers:r}}=t.getContext(),n=r.get("vendure-auth-token");return this.saveAuthToken(n),e})}getAuthToken(){return"undefined"!=typeof localStorage?localStorage.getItem("vendure-auth-token"):null}saveAuthToken(t){t&&"undefined"!=typeof localStorage&&localStorage.setItem("vendure-auth-token",t)}createApolloClient(t){let e=new c.HttpLink({uri:t}),r=new c.ApolloLink((t,e)=>this.authHandler(t,e));return new c.ApolloClient({cache:new c.InMemoryCache,link:(0,c.concat)(r,e),defaultOptions:{query:{fetchPolicy:"no-cache",errorPolicy:"all"},watchQuery:{fetchPolicy:"no-cache",errorPolicy:"all"}}})}constructor(t){tq(this,"auth",void 0),tq(this,"customer",void 0),tq(this,"collection",void 0),tq(this,"checkout",void 0),tq(this,"utils",void 0),tq(this,"order",void 0),tq(this,"apolloClient",void 0),this.apolloClient=this.createApolloClient(t.apiUri),this.order=new tv(this.apolloClient),this.customer=new th(this.apolloClient),this.collection=new tm(this.apolloClient),this.checkout=new tu(this.apolloClient),this.utils=new tA(this.apolloClient),this.auth=new h(this.apolloClient)}}export{tL as VendureClient};