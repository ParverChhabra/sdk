# AddressService

A list of all methods in the `AddressService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description |
| :---------------------------------------------------- | :---------- |
| [addressControllerFindAll](#addresscontrollerfindall) |             |
| [addressControllerGet](#addresscontrollerget)         |             |
| [addressControllerUpdate](#addresscontrollerupdate)   |             |
| [addressControllerDelete](#addresscontrollerdelete)   |             |

## addressControllerFindAll

- HTTP Method: `GET`
- Endpoint: `/v2/address`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.address.addressControllerFindAll();

  console.log(data);
})();
```

## addressControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/address/{id}`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.address.addressControllerGet('id');

  console.log(data);
})();
```

## addressControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/address/{id}`

**Parameters**

| Name | Type | Required | Description       |
| :--- | :--- | :------- | :---------------- |
| body | any  | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.address.addressControllerUpdate(input);

  console.log(data);
})();
```

## addressControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/address/{id}`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.address.addressControllerDelete('id');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
