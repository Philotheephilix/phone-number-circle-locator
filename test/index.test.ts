import { lookup, getCircle, getOperator, LookupResult } from "../src/index";

let passed = 0;
let failed = 0;

function assert<T>(label: string, actual: T, expected: T): void {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    passed++;
    console.log(`  PASS: ${label}`);
  } else {
    failed++;
    console.error(`  FAIL: ${label}`);
    console.error(`    expected: ${JSON.stringify(expected)}`);
    console.error(`    actual:   ${JSON.stringify(actual)}`);
  }
}

console.log("lookup()");
assert<LookupResult | null>("basic 10-digit number", lookup("9900123456"), {
  phone: "9900123456",
  prefix: "9900",
  operator: "Airtel",
  circle: "Karnataka",
});

assert<LookupResult | null>("with +91 prefix", lookup("+919900123456"), {
  phone: "9900123456",
  prefix: "9900",
  operator: "Airtel",
  circle: "Karnataka",
});

assert<LookupResult | null>("with 0 prefix", lookup("09900123456"), {
  phone: "9900123456",
  prefix: "9900",
  operator: "Airtel",
  circle: "Karnataka",
});

assert<LookupResult | null>("with spaces and dashes", lookup("+91 9910-123456"), {
  phone: "9910123456",
  prefix: "9910",
  operator: "Airtel",
  circle: "Delhi",
});

assert<LookupResult | null>("with parentheses", lookup("(9910) 123456"), {
  phone: "9910123456",
  prefix: "9910",
  operator: "Airtel",
  circle: "Delhi",
});

assert<LookupResult | null>("number input", lookup(9900123456), {
  phone: "9900123456",
  prefix: "9900",
  operator: "Airtel",
  circle: "Karnataka",
});

assert<LookupResult | null>("unknown prefix returns null", lookup("1234567890"), null);
assert<LookupResult | null>("short input returns null", lookup("99"), null);
assert<LookupResult | null>("empty string returns null", lookup(""), null);

console.log("\ngetCircle()");
assert<string | null>("returns circle", getCircle("9900123456"), "Karnataka");
assert<string | null>("Delhi circle", getCircle("+91 9910 000000"), "Delhi");
assert<string | null>("unknown returns null", getCircle("1234567890"), null);

console.log("\ngetOperator()");
assert<string | null>("returns operator", getOperator("9900123456"), "Airtel");
assert<string | null>("Vodafone Idea operator", getOperator("9920123456"), "Vodafone Idea");
assert<string | null>("BSNL operator", getOperator("9414098765"), "BSNL");
assert<string | null>("Jio operator", getOperator("6202123456"), "Reliance Jio");
assert<string | null>("unknown returns null", getOperator("1234567890"), null);

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
