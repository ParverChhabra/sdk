# EventAttendeeDenormService

A list of all methods in the `EventAttendeeDenormService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                         | Description |
| :---------------------------------------------------------------------------------------------- | :---------- |
| [eventAttendeeDenormControllerRefresh](#eventattendeedenormcontrollerrefresh)                   |             |
| [eventAttendeeDenormControllerRefreshForEvents](#eventattendeedenormcontrollerrefreshforevents) |             |

## eventAttendeeDenormControllerRefresh

- HTTP Method: `POST`
- Endpoint: `/v2/event-attendee-denorm/{event_id}/refresh`

**Parameters**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| eventId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventAttendeeDenorm.eventAttendeeDenormControllerRefresh('event_id');

  console.log(data);
})();
```

## eventAttendeeDenormControllerRefreshForEvents

- HTTP Method: `POST`
- Endpoint: `/v2/event-attendee-denorm/refresh`

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

  const { data } = await pocSdk.eventAttendeeDenorm.eventAttendeeDenormControllerRefreshForEvents(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
