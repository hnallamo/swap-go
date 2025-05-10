// Test script for winter vs. standard month distance thresholds
// Run with: node test-distance-thresholds.js

// Using native fetch (available in newer Node.js versions)

// List of cities to test
const cities = [
  'Chicago',
  'Columbus',
  'Detroit',
  'Indianapolis',
  'Milwaukee',
  'Minneapolis',
  'Kansas City (KS)',
  'Cleveland',
  'Toledo',
  'Cincinnati',
  'St. Louis',
  'Fort Wayne',
  'Columbia',
  'Des Moines',
  'Grand Rapids',
  'Kalamazoo',
  'Springfield',
  'Green Bay'
];

// Test both winter (December) and standard (April) dates
const dates = [
  '2025-12-15', // Winter month (December)
  '2025-04-15'  // Standard month (April)
];

// Test selected city pairs with all dates
async function testCityPair(fromCity, toCity) {
  console.log(`\nTesting route: ${fromCity} → ${toCity}`);
  
  for (const date of dates) {
    try {
      const response = await fetch(`http://localhost:3000/api/distance?from=${encodeURIComponent(fromCity)}&to=${encodeURIComponent(toCity)}&pickupDate=${date}`);
      const data = await response.json();
      
      const seasonType = data.temperatureContext.isWinterSeason ? 'WINTER' : 'STANDARD';
      const threshold = data.temperatureContext.threshold;
      const needsSwap = data.needsSwapLocation ? 'YES' : 'NO';
      
      console.log(`  ${date} (${seasonType}) - Distance: ${data.distance.toFixed(0)} miles, Threshold: ${threshold} miles, Needs Swap: ${needsSwap}`);
      console.log(`  Message: ${data.temperatureContext.message}`);
    } catch (error) {
      console.error(`  Error testing ${fromCity} to ${toCity} on ${date}:`, error.message);
    }
  }
}

async function runTests() {
  console.log('TESTING DISTANCE THRESHOLDS FOR WINTER VS. STANDARD MONTHS');
  console.log('=======================================================');
  
  // Test some selected city pairs
  const testPairs = [
    ['Chicago', 'Detroit'], // ~280 miles - over winter threshold, but under standard
    ['Chicago', 'Minneapolis'], // ~400 miles - over both thresholds
    ['Chicago', 'Indianapolis'], // ~180 miles - under both thresholds
    ['Milwaukee', 'Detroit'], // ~325 miles - over both thresholds
    ['Milwaukee', 'Chicago'], // ~90 miles - under both thresholds
    ['Detroit', 'Cleveland'], // ~170 miles - under both thresholds
    ['Detroit', 'Columbus'], // ~200 miles - exactly at winter threshold
    ['Minneapolis', 'Des Moines'], // ~235 miles - over winter, under standard
    ['Cincinnati', 'St. Louis'], // ~350 miles - over both thresholds
    ['Green Bay', 'Toledo'], // ~370 miles - over both thresholds
  ];
  
  for (const [from, to] of testPairs) {
    await testCityPair(from, to);
  }
}

runTests().catch(err => {
  console.error('Test failed:', err);
});