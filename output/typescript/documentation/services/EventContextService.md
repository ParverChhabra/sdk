# EventContextService

A list of all methods in the `EventContextService` service. Click on the method name to view detailed information about that method.

| Methods                                                               | Description |
| :-------------------------------------------------------------------- | :---------- |
| [eventContextControllerCreate](#eventcontextcontrollercreate)         |             |
| [eventContextControllerUpsertMany](#eventcontextcontrollerupsertmany) |             |
| [eventContextControllerGet](#eventcontextcontrollerget)               |             |
| [eventContextControllerUpdate](#eventcontextcontrollerupdate)         |             |
| [eventContextControllerDelete](#eventcontextcontrollerdelete)         |             |

## eventContextControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/event-context`

**Parameters**

| Name | Type                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateEventContextRequest](../models/CreateEventContextRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateEventContextRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createEventContextRequest: CreateEventContextRequest = {
    eventId: 'eventId',
    team: 'team',
    context: 'context',
  };

  const { data } = await pocSdk.eventContext.eventContextControllerCreate(createEventContextRequest);

  console.log(data);
})();
```

## eventContextControllerUpsertMany

- HTTP Method: `POST`
- Endpoint: `/v2/event-context/event/{eventId}/create-many`

**Parameters**

| Name    | Type   | Required | Description       |
| :------ | :----- | :------- | :---------------- |
| body    | any    | ✅       | The request body. |
| eventId | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.eventContext.eventContextControllerUpsertMany('eventId', input);

  console.log(data);
})();
```

## eventContextControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/event-context/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventContext.eventContextControllerGet();

  console.log(data);
})();
```

## eventContextControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/event-context/{id}`

**Parameters**

| Name | Type                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------- |
| body | [UpdateEventContextRequest](../models/UpdateEventContextRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateEventContextRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateEventContextRequest: UpdateEventContextRequest = {
    context: 'context',
  };

  const { data } = await pocSdk.eventContext.eventContextControllerUpdate(updateEventContextRequest);

  console.log(data);
})();
```

## eventContextControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/event-context/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventContext.eventContextControllerDelete();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
