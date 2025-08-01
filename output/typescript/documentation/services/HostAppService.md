# HostAppService

A list of all methods in the `HostAppService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description |
| :---------------------------------------------------------- | :---------- |
| [hostAppAuthControllerLogin](#hostappauthcontrollerlogin)   |             |
| [hostAppAuthControllerLogout](#hostappauthcontrollerlogout) |             |

## hostAppAuthControllerLogin

- HTTP Method: `POST`
- Endpoint: `/v2/host-app/auth/login/{type}`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| type | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.hostApp.hostAppAuthControllerLogin('type');

  console.log(data);
})();
```

## hostAppAuthControllerLogout

- HTTP Method: `GET`
- Endpoint: `/v2/host-app/auth/logout/{type}`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| type | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.hostApp.hostAppAuthControllerLogout('type');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
