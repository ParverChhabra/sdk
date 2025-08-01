# TestimonialService

A list of all methods in the `TestimonialService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                             | Description |
| :-------------------------------------------------------------------------------------------------- | :---------- |
| [testimonialControllerCreate](#testimonialcontrollercreate)                                         |             |
| [testimonialControllerGetTestimonialsForClientId](#testimonialcontrollergettestimonialsforclientid) |             |
| [testimonialControllerGet](#testimonialcontrollerget)                                               |             |
| [testimonialControllerUpdate](#testimonialcontrollerupdate)                                         |             |
| [testimonialControllerDelete](#testimonialcontrollerdelete)                                         |             |

## testimonialControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/testimonial`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateTestimonialRequest](../models/CreateTestimonialRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateTestimonialRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createTestimonialRequest: CreateTestimonialRequest = {
    clientId: {},
    embedLink: 'embedLink',
    postLink: 'postLink',
  };

  const { data } = await pocSdk.testimonial.testimonialControllerCreate(createTestimonialRequest);

  console.log(data);
})();
```

## testimonialControllerGetTestimonialsForClientId

- HTTP Method: `GET`
- Endpoint: `/v2/testimonial/client/{clientId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.testimonial.testimonialControllerGetTestimonialsForClientId();

  console.log(data);
})();
```

## testimonialControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/testimonial/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.testimonial.testimonialControllerGet();

  console.log(data);
})();
```

## testimonialControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/testimonial/{id}`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [UpdateTestimonialRequest](../models/UpdateTestimonialRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateTestimonialRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateTestimonialRequest: UpdateTestimonialRequest = {
    hidden: true,
    embedLink: 'embedLink',
    postLink: 'postLink',
  };

  const { data } = await pocSdk.testimonial.testimonialControllerUpdate(updateTestimonialRequest);

  console.log(data);
})();
```

## testimonialControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/testimonial/{id}`

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

  const { data } = await pocSdk.testimonial.testimonialControllerDelete('id');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
