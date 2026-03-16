import data from "./data.json";

export interface LookupResult {
  phone: string;
  prefix: string;
  operator: string;
  circle: string;
}

type PhoneData = Record<string, { operator: string; circle: string }>;

const db: PhoneData = data;

function normalize(phone: string): string {
  const digits = phone.replace(/[\s\-()]+/g, "");
  if (digits.startsWith("+91")) return digits.slice(3);
  if (digits.startsWith("0")) return digits.slice(1);
  return digits;
}

export function lookup(phone: string | number): LookupResult | null {
  const digits = normalize(String(phone));
  if (digits.length < 4 || digits.length > 10) return null;
  const prefix = digits.slice(0, 4);
  const entry = db[prefix];
  if (!entry) return null;
  return {
    phone: digits,
    prefix,
    operator: entry.operator,
    circle: entry.circle,
  };
}

export function getCircle(phone: string | number): string | null {
  const result = lookup(phone);
  return result ? result.circle : null;
}

export function getOperator(phone: string | number): string | null {
  const result = lookup(phone);
  return result ? result.operator : null;
}
