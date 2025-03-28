import*as e from"@apollo/client/core/core.cjs";import*as t from"@apollo/client/link/core/core.cjs";import*as a from"@apollo/client/link/http/http.cjs";import*as r from"@arrirpc/schema";var n={"./src/types/astro.types.ts":function(e,t,a){var r=a("@apollo/client/core/core.cjs");a.o(r,"ApolloClient")&&a.d(t,{ApolloClient:function(){return r.ApolloClient}}),a.o(r,"ApolloLink")&&a.d(t,{ApolloLink:function(){return r.ApolloLink}}),a.o(r,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return r.InMemoryCache}}),a.o(r,"gql")&&a.d(t,{gql:function(){return r.gql}}),a.o(r,"HttpLink")&&a.d(t,{HttpLink:function(){return r.HttpLink}}),a.o(r,"concat")&&a.d(t,{concat:function(){return r.concat}});var n=a("@apollo/client/link/core/core.cjs");a.o(n,"ApolloClient")&&a.d(t,{ApolloClient:function(){return n.ApolloClient}}),a.o(n,"ApolloLink")&&a.d(t,{ApolloLink:function(){return n.ApolloLink}}),a.o(n,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return n.InMemoryCache}}),a.o(n,"gql")&&a.d(t,{gql:function(){return n.gql}}),a.o(n,"HttpLink")&&a.d(t,{HttpLink:function(){return n.HttpLink}}),a.o(n,"concat")&&a.d(t,{concat:function(){return n.concat}});var i=a("@apollo/client/link/http/http.cjs");a.o(i,"ApolloClient")&&a.d(t,{ApolloClient:function(){return i.ApolloClient}}),a.o(i,"ApolloLink")&&a.d(t,{ApolloLink:function(){return i.ApolloLink}}),a.o(i,"InMemoryCache")&&a.d(t,{InMemoryCache:function(){return i.InMemoryCache}}),a.o(i,"gql")&&a.d(t,{gql:function(){return i.gql}}),a.o(i,"HttpLink")&&a.d(t,{HttpLink:function(){return i.HttpLink}}),a.o(i,"concat")&&a.d(t,{concat:function(){return i.concat}})},"@apollo/client/core/core.cjs":function(t){t.exports=e},"@apollo/client/link/core/core.cjs":function(e){e.exports=t},"@apollo/client/link/http/http.cjs":function(e){e.exports=a}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=r.a.object({login:r.a.object({id:r.a.string(),identifier:r.a.string()})}),c=r.a.object({registerCustomerAccount:r.a.object({success:r.a.boolean()})});var l=o("./src/types/astro.types.ts");class d{constructor(e){var t,a;a=void 0,(t="client")in this?Object.defineProperty(this,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[t]=a,this.client=e}}class u extends d{async login(e,t){let a=await this.client.mutate({mutation:(0,l.gql)`
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
            `,variables:{email:e,password:t}});return r.a.parse(s,a.data)}async register(e,t,a,n){let i=await this.client.mutate({mutation:(0,l.gql)`
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
            `,variables:{input:{firstName:e,lastName:t,email:a,password:n}}});return r.a.parse(c,i.data)}}let p=r.a.object({id:r.a.string(),createdAt:r.a.string(),name:r.a.string(),type:r.a.string(),fileSize:r.a.number(),mimeType:r.a.string(),width:r.a.number(),height:r.a.number(),source:r.a.string(),preview:r.a.string()}),m=r.a.object({id:r.a.string(),name:r.a.string()}),g=r.a.object({description:r.a.string(),taxRate:r.a.number()}),b=r.a.object({id:r.a.string(),name:r.a.string(),isDefault:r.a.boolean()}),y=r.a.object({id:r.a.string(),name:r.a.string(),enabled:r.a.boolean(),value:r.a.number(),category:b,zone:m}),h=r.a.object({description:r.a.string(),taxRate:r.a.number(),taxBase:r.a.number(),taxTotal:r.a.number()}),A=r.a.object({id:r.a.string(),facet:r.a.optional(r.a.object({id:r.a.string(),name:r.a.string(),code:r.a.string()})),facetId:r.a.string(),name:r.a.string(),code:r.a.string()});r.a.object({id:r.a.string(),name:r.a.string(),code:r.a.string(),values:r.a.array(r.a.object({id:r.a.string(),facetId:r.a.string(),name:r.a.string(),code:r.a.string()}))});let C=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),groupId:r.a.string(),group:r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string()})});r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),options:r.a.array(r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),groupId:r.a.string()}))}),r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),name:r.a.string(),slug:r.a.string(),description:r.a.string(),featuredAsset:p,assets:r.a.array(p),facetValues:r.a.array(A),customFields:r.a.object({location:r.a.string(),date:r.a.timestamp()})});let j=r.a.object({id:r.a.string(),productId:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),sku:r.a.string(),name:r.a.string(),featuredAsset:p,assets:r.a.array(p),price:r.a.number(),currencyCode:r.a.string(),priceWithTax:r.a.number(),stockLevel:r.a.number(),taxRateApplied:y,taxCategory:b,options:r.a.array(C),facetValues:r.a.array(A)}),f=r.a.object({id:r.a.string(),name:r.a.string(),slug:r.a.string()}),v=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),languageCode:r.a.string(),name:r.a.string(),slug:r.a.string(),breadcrumbs:r.a.array(f),position:r.a.number(),description:r.a.string(),featuredAsset:p,assets:r.a.array(p),parentId:r.a.string(),productVariants:r.a.array(j)}),L=r.a.object({collection:v}),I=e=>{let t=e.properties;return"optionalProperties"in e&&(t={...t,...e.optionalProperties}),"elements"in e&&(t={...t,...e.elements.properties}),Object.entries(t).map(e=>{let[t,a]=e;return"object"!=typeof a?t:"properties"in a||"elements"in a||"optionalProperties"in a?a.elements&&!(a.elements.properties||a.elements.optionalProperties)?t:`${t} {
${I(a)}
}`:t}).join("\n")};class q extends d{async getCollectionById(e){let t=await this.client.query({query:(0,l.gql)`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${I(v)}
                    }
                }
            `,variables:{id:e}});return r.a.parse(L,t.data)}}let x=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),enabled:r.a.boolean()}),k=r.a.object({id:r.a.string(),fullName:r.a.string(),company:r.a.string(),streetLine1:r.a.string(),streetLine2:r.a.string(),city:r.a.string(),province:r.a.string(),postalCode:r.a.string(),country:x,phoneNumber:r.a.string(),defaultShippingAddress:r.a.boolean(),defaultBillingAddress:r.a.boolean()}),$=r.a.object({id:r.a.string(),title:r.a.string(),firstName:r.a.string(),lastName:r.a.string(),phoneNumber:r.a.string(),emailAddress:r.a.string(),addresses:r.a.array(k),customFields:r.a.object({subscribedUntil:r.a.nullable(r.a.timestamp())})}),w=r.a.object({activeCustomer:r.a.nullable($)}),T=r.a.object({createCustomerAddress:k}),O=r.a.object({updateCustomerAddress:k}),P=r.a.object({deleteCustomerAddress:r.a.object({success:r.a.boolean()})});class S extends d{async getActiveCustomer(){let e=await this.client.query({query:(0,l.gql)`
                query GetActiveCustomer {
                    ${I(w)}
                }
            `});return r.a.parse(w,e.data)}async createCustomerAddress(e){let t=await this.client.mutate({mutation:(0,l.gql)`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ${I(k)}
                   }
                }
            `,variables:{input:{fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}});return r.a.parse(T,t.data)}async updateCustomerAddress(e){let t=await this.client.mutate({mutation:(0,l.gql)`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        ${I(k)}
                   }
                }
            `,variables:{input:{id:e.id,fullName:e.fullName,company:e.company,streetLine1:e.streetLine1,streetLine2:e.streetLine2,city:e.city,province:e.province,postalCode:e.postalCode,countryCode:e.country.code,phoneNumber:e.phoneNumber,defaultShippingAddress:e.defaultShippingAddress,defaultBillingAddress:e.defaultBillingAddress}}});return r.a.parse(O,t.data)}async deleteCustomerAddress(e){let t=await this.client.mutate({mutation:(0,l.gql)`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,variables:{id:e}});return r.a.parse(P,t.data)}}let N=r.a.object({orderLineId:r.a.string(),quantity:r.a.number(),refundId:r.a.string()}),M=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),items:r.a.number(),shipping:r.a.number(),adjustment:r.a.number(),total:r.a.number(),method:r.a.string(),state:r.a.string(),transactionId:r.a.string(),reason:r.a.string(),lines:r.a.array(N),paymentId:r.a.string()}),W=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),method:r.a.string(),amount:r.a.number(),state:r.a.string(),transactionId:r.a.string(),errorMessage:r.a.string(),refunds:r.a.array(M)}),H=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),startsAt:r.a.timestamp(),endsAt:r.a.timestamp(),couponCode:r.a.string(),perCustomerUsageLimit:r.a.number(),name:r.a.string(),description:r.a.string(),enabled:r.a.boolean()}),B=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),description:r.a.string(),sku:r.a.string(),taxLines:r.a.array(g),price:r.a.number(),priceWithTax:r.a.number(),taxRate:r.a.number()}),R=r.a.object({adjustmentSource:r.a.string(),type:r.a.string(),description:r.a.string(),amount:r.a.number(),amountWithTax:r.a.number()}),U=r.a.object({id:r.a.string(),productVariant:r.a.optional(j),featuredAsset:p,unitPrice:r.a.number(),unitPriceWithTax:r.a.number(),discountedUnitPrice:r.a.number(),discountedUnitPriceWithTax:r.a.number(),quantity:r.a.number(),orderPlacedQuantity:r.a.number(),taxRate:r.a.number(),linePrice:r.a.number(),linePriceWithTax:r.a.number(),discountedLinePrice:r.a.number(),discountedLinePriceWithTax:r.a.number(),proratedLinePrice:r.a.number(),proratedLinePriceWithTax:r.a.number(),lineTax:r.a.number(),discounts:r.a.array(R),taxLines:r.a.array(g)}),V=r.a.object({id:r.a.string(),code:r.a.string(),name:r.a.string(),description:r.a.string()}),D=r.a.object({id:r.a.string(),shippingMethod:V,price:r.a.number(),priceWithTax:r.a.number(),discountedPrice:r.a.number(),discountedPriceWithTax:r.a.number()}),z=r.a.object({fullName:r.a.string(),company:r.a.string(),streetLine1:r.a.string(),streetLine2:r.a.string(),city:r.a.string(),province:r.a.string(),postalCode:r.a.string(),country:r.a.string(),countryCode:r.a.string(),phoneNumber:r.a.string()}),E=r.a.object({id:r.a.string(),createdAt:r.a.timestamp(),type:r.a.string(),orderPlacedAt:r.a.timestamp(),code:r.a.string(),state:r.a.string(),active:r.a.boolean(),customer:r.a.optional($),shippingAddress:r.a.optional(z),billingAddress:r.a.optional(z),lines:r.a.array(U),surcharges:r.a.array(B),discounts:r.a.array(R),couponCodes:r.a.array(r.a.string()),promotions:r.a.array(H),payments:r.a.array(W),totalQuantity:r.a.number(),subTotal:r.a.number(),subTotalWithTax:r.a.number(),currencyCode:r.a.string(),shippingLines:r.a.array(D),shipping:r.a.number(),shippingWithTax:r.a.number(),total:r.a.number(),totalWithTax:r.a.number(),taxSummary:r.a.array(h)});r.a.object({items:r.a.array(E),totalItems:r.a.number()});let F=r.a.object({orderByCode:r.a.object({state:r.a.string()})}),G=r.a.object({activeOrder:r.a.optional(E)}),Q=r.a.object({addToActiveOrder:r.a.optional(E)}),J=r.a.object({adjustOrderLine:r.a.optional(E)}),K=r.a.object({removeOrderLine:r.a.optional(E)});class X extends d{async getByCode(e){let t=await this.client.query({query:(0,l.gql)`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        state
                    }
                }
            `,variables:{code:e}});return r.a.parse(F,t.data)}async getActiveOrder(){let e=await this.client.query({query:(0,l.gql)`
                query GetActiveOrder {
                    ${I(G)}
                }
            `});return r.a.parse(G,e.data)}async addToActiveOrder(e,t){let a=await this.client.mutate({mutation:(0,l.gql)`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ${I(E)}
                    }
                }
            `,variables:{productVariantId:e,quantity:t}});return r.a.parse(Q,a.data)}async adjustOrderLine(e,t){let a=await this.client.mutate({mutation:(0,l.gql)`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        ${I(E)}
                    }
                }
            `,variables:{orderLineId:e,quantity:t}});return r.a.parse(J,a.data)}async removeOrderLine(e){let t=await this.client.mutate({mutation:(0,l.gql)`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        ${I(E)}
                    }
                }
            `,variables:{orderLineId:e}});return r.a.parse(K,t.data)}}function Y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class Z{authHandler(e,t){let a=this.getAuthToken(),r=a?`Bearer ${a}`:null;return e.setContext({headers:{authorization:r}}),t(e).map(t=>{let{response:{headers:a}}=e.getContext(),r=a.get("vendure-auth-token");return this.saveAuthToken(r),t})}getAuthToken(){return"undefined"!=typeof localStorage?localStorage.getItem("vendure-auth-token"):null}saveAuthToken(e){e&&"undefined"!=typeof localStorage&&localStorage.setItem("vendure-auth-token",e)}createApolloClient(e){let t=new l.HttpLink({uri:e}),a=new l.ApolloLink((e,t)=>this.authHandler(e,t));return new l.ApolloClient({cache:new l.InMemoryCache,link:(0,l.concat)(a,t)})}constructor(e){Y(this,"auth",void 0),Y(this,"customer",void 0),Y(this,"collection",void 0),Y(this,"order",void 0),Y(this,"apolloClient",void 0),this.apolloClient=this.createApolloClient(e.apiUri),this.order=new X(this.apolloClient),this.customer=new S(this.apolloClient),this.collection=new q(this.apolloClient),this.auth=new u(this.apolloClient)}}export{Z as VendureClient};