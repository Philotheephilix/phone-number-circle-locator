# @philotheephilix/phone-number-circle-locator

Look up Indian mobile phone numbers to find the **telecom circle** (region) and **operator**.

Covers 2,576 four-digit prefixes across all major Indian carriers including Airtel, Vodafone, Idea, BSNL, Jio, Tata Docomo, Aircel, and more.

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
//   operator: "AIRTEL",
//   circle: "KARNATAKA"
// }

getCircle("9910123456");    // "DELHI"
getOperator("9910123456");  // "AIRTEL"
```

### TypeScript

```ts
import { lookup, getCircle, getOperator, LookupResult } from "@philotheephilix/phone-number-circle-locator";

const result: LookupResult | null = lookup("+91 9900 123456");

if (result) {
  console.log(result.circle);    // "KARNATAKA"
  console.log(result.operator);  // "AIRTEL"
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
getCircle("9900123456");  // "KARNATAKA"
getCircle("9910123456");  // "DELHI"
getCircle("9820123456");  // "MUMBAI"
```

### `getOperator(phone: string | number): string | null`

Returns just the operator name, or `null` if not found.

```js
getOperator("9900123456");  // "AIRTEL"
getOperator("9920123456");  // "VODAFONE"
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

| Operator | Coverage |
|---|---|
| AIRTEL | Pan India |
| VODAFONE | Pan India |
| IDEA | Pan India |
| BSNL | Pan India |
| RELIANCE | Multiple circles |
| TATA DOCOMO | Multiple circles |
| AIRCEL | Multiple circles |
| MTNL | Delhi, Mumbai |
| UNINOR | Multiple circles |
| MTS | Multiple circles |
| LOOP MOBILE | Mumbai |
| VIDEOCON | Multiple circles |

## Telecom Circles

The following circles are covered:

Andhra Pradesh, Assam, Bihar & Jharkhand, Chennai, Delhi, Gujarat, Haryana, Himachal Pradesh, Jammu & Kashmir, Karnataka, Kerala, Kolkata, Madhya Pradesh & Chhatisgarh, Maharashtra, Mumbai, North East, Odisha, Punjab, Rajasthan, Tamilnadu, Uttar Pradesh (E), Uttar Pradesh (W) & Uttarakhand, West Bengal

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

Phone prefix data sourced from [IndiaMobileNumbers](https://github.com/BaseMax/IndiaMobileNumbers).

## License

MIT
