# UpdateBookingSessionRequest

**Properties**

| Name         | Type                                | Required | Description                            |
| :----------- | :---------------------------------- | :------- | :------------------------------------- |
| thirdPartyId | string                              | ❌       | Third party ID for the booking session |
| url          | string                              | ❌       | URL for the booking session            |
| provider     | UpdateBookingSessionRequestProvider | ❌       | Provider for the booking session       |

# UpdateBookingSessionRequestProvider

Provider for the booking session

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| BENEVITY    | string | ✅       | "benevity"    |
| APP_GOODERA | string | ✅       | "app_goodera" |
| YOURCAUSE   | string | ✅       | "yourcause"   |
| CVP         | string | ✅       | "cvp"         |

<!-- This file was generated by liblab | https://liblab.com/ -->
