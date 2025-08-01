# ClientService

A list of all methods in the `ClientService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description |
| :------------------------------------------------------------------ | :---------- |
| [clientControllerGet](#clientcontrollerget)                         |             |
| [clientControllerUpdate](#clientcontrollerupdate)                   |             |
| [clientControllerList](#clientcontrollerlist)                       |             |
| [clientControllerCreate](#clientcontrollercreate)                   |             |
| [clientControllerHandleLocations](#clientcontrollerhandlelocations) |             |
| [clientControllerAttachChecklist](#clientcontrollerattachchecklist) |             |

## clientControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/client/{id}`

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

  const { data } = await pocSdk.client.clientControllerGet('id');

  console.log(data);
})();
```

## clientControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/client/{id}`

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

  const { data } = await pocSdk.client.clientControllerUpdate(input);

  console.log(data);
})();
```

## clientControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/client`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.client.clientControllerList();

  console.log(data);
})();
```

## clientControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/client`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [CreateClientRequest](../models/CreateClientRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateClientRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createClientRequest: CreateClientRequest = {
    clientContext: {},
  };

  const { data } = await pocSdk.client.clientControllerCreate(createClientRequest);

  console.log(data);
})();
```

## clientControllerHandleLocations

- HTTP Method: `POST`
- Endpoint: `/v2/client/locations`

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

  const { data } = await pocSdk.client.clientControllerHandleLocations(input);

  console.log(data);
})();
```

## clientControllerAttachChecklist

- HTTP Method: `POST`
- Endpoint: `/v2/client/{clientId}/attach-checklist`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.client.clientControllerAttachChecklist();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
