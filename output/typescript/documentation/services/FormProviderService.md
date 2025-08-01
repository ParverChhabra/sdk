# FormProviderService

A list of all methods in the `FormProviderService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description |
| :---------------------------------------------------------------- | :---------- |
| [formProviderControllerRetrieve](#formprovidercontrollerretrieve) |             |

## formProviderControllerRetrieve

- HTTP Method: `POST`
- Endpoint: `/v2/form-provider/retrieve`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.formProvider.formProviderControllerRetrieve();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
