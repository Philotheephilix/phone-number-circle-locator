# @philotheephilix/phone-number-circle-locator

Look up Indian mobile phone numbers to find the **telecom circle** (region) and **operator**.

Covers 1,702 four-digit prefixes across all major Indian carriers including Airtel, Reliance Jio, Vodafone Idea, and BSNL.

## Installation

```bash
npm install @philotheephilix/phone-number-circle-locator
```

## Usage

### JavaScript

```js
const { lookup, getCircle, getOperator } = require("@philotheephilix/phone-number-circle-locator");

const result = lookup("+91 9900 123456");
console.log(result);
// {
//   phone: "9900123456",
//   prefix: "9900",
//   operator: "Airtel",
//   circle: "Karnataka"
// }

getCircle("9910123456");    // "Delhi"
getOperator("9910123456");  // "Airtel"
```

### TypeScript

```ts
import { lookup, getCircle, getOperator, LookupResult } from "@philotheephilix/phone-number-circle-locator";

const result: LookupResult | null = lookup("+91 9900 123456");

if (result) {
  console.log(result.circle);    // "Karnataka"
  console.log(result.operator);  // "Airtel"
}
```

## API

### `lookup(phone: string | number): LookupResult | null`

Returns the full lookup result for a phone number, or `null` if the prefix is not found.

**Parameters:**
- `phone` - An Indian mobile number as a string or number

**Returns:** `LookupResult | null`

```ts
interface LookupResult {
  phone: string;     // Normalized 10-digit number
  prefix: string;    // 4-digit prefix used for lookup
  operator: string;  // Telecom operator name
  circle: string;    // Telecom circle (region)
}
```

### `getCircle(phone: string | number): string | null`

Returns just the telecom circle name, or `null` if not found.

```js
getCircle("9900123456");  // "Karnataka"
getCircle("9910123456");  // "Delhi"
```

### `getOperator(phone: string | number): string | null`

Returns just the operator name, or `null` if not found.

```js
getOperator("9900123456");  // "Airtel"
getOperator("9920123456");  // "Vodafone Idea"
getOperator("9414098765");  // "BSNL"
```

## Input Formats

The following phone number formats are all supported:

| Format | Example |
|---|---|
| 10-digit | `9900123456` |
| With +91 | `+919900123456` |
| With 0 prefix | `09900123456` |
| With spaces | `+91 9900 123456` |
| With dashes | `9900-123456` |
| With parentheses | `(9900) 123456` |
| As number | `9900123456` |

## Supported Operators

| Operator |
|---|
| Airtel |
| Reliance Jio |
| Vodafone Idea |
| BSNL |
| Aircel |

## Telecom Circles

Andhra Pradesh, Assam, Bihar & Jharkhand, Delhi, Gujarat, Haryana, Himachal Pradesh, Jammu & Kashmir, Karnataka, Kerala, Madhya Pradesh & Chhattisgarh, Maharashtra & Goa, North East, Odisha, Punjab, Rajasthan, Tamil Nadu, UP East, UP West & Uttarakhand, Uttar Pradesh, West Bengal

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test
```

## Data Source

Phone prefix data sourced from [in-mob-prefix](https://github.com/hstsethi/in-mob-prefix) by [@hstsethi](https://github.com/hstsethi).

## License

MIT
