# Cartex
 
A suppport functions for Cartex E-Commerce framework


Setup **Cartex** configs:
```
interface CartexConfig
```

## Payment Gateway

- ## Phonepe PG

Required Parameters:
| param | required |
| ---    | ---   | 
| merchantId | true |
| saltKey | true |
| redirectUrl | true |
| callbackUrl | false |
| isDev | false |


```ts
const gateway = new PhonepeGateway({
    merchantId,
    saltKey,
    redirectUrl,
    callbackUrl,
    isDev
  });

const resp = await gateway.initPayment(amount, transactionId, userId);
// Will get the response from Phonepe with required parameters
```