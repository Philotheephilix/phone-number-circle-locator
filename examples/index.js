"use strict";

const { lookup, getCircle, getOperator } = require("@philotheephilix/phone-number-circle-locator");

const numbers = [
  "+91 9900 123456",
  "09910-234567",
  "9845012345",
  "8800123456",
  "7259876543",
  "+91-9820-567890",
  "9414098765",
  "9830012345",
  "1234567890",
];

console.log("India Mobile Number Circle Locator\n");
console.log(
  "Phone Number".padEnd(20),
  "Operator".padEnd(18),
  "Circle"
);
console.log("-".repeat(60));

for (const num of numbers) {
  const result = lookup(num);
  if (result) {
    console.log(
      num.padEnd(20),
      result.operator.padEnd(18),
      result.circle
    );
  } else {
    console.log(num.padEnd(20), "Not found");
  }
}

console.log("\n--- Quick helpers ---");
console.log("Circle for 9900123456:", getCircle("9900123456"));
console.log("Operator for 9900123456:", getOperator("9900123456"));
