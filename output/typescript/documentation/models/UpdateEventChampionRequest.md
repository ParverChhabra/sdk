# UpdateEventChampionRequest

**Properties**

| Name      | Type                           | Required | Description                  |
| :-------- | :----------------------------- | :------- | :--------------------------- |
| email     | string                         | ✅       | Email of the champion        |
| firstName | string                         | ❌       | First name of the champion   |
| lastName  | string                         | ❌       | Last name of the champion    |
| role      | UpdateEventChampionRequestRole | ❌       | Role of the champion         |
| phone     | string                         | ❌       | Phone number of the champion |
| isdCode   | string                         | ❌       | ISD code                     |

# UpdateEventChampionRequestRole

Role of the champion

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| VOLUNTEER | string | ✅       | "VOLUNTEER" |
| CHAMPION  | string | ✅       | "CHAMPION"  |
| POC       | string | ✅       | "POC"       |

<!-- This file was generated by liblab | https://liblab.com/ -->
