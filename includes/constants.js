// 1. Define a constant for Tax Rate
const TAX_RATE = 0.08;

// 2. Define a list of valid regions (useful for validation or filtering)
const VALID_REGIONS = ["US-East", "US-West", "EU-Central"];

// 3. Export them so SQLX files can see them
module.exports = {
    TAX_RATE,
    VALID_REGIONS
};