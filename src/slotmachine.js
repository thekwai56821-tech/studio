// slotMachine.js

// Define symbols
const SYMBOLS = ["A", "K", "Q", "J", "10", "Lion", "Elephant", "Buffalo", "Zebra", "Scatter", "Wild"];

// Random reel spin (5 reels × 3 rows)
function spinReels() {
  let reels = [];
  for (let c = 0; c < 5; c++) {
    let column = [];
    for (let r = 0; r < 3; r++) {
      const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      column.push(symbol);
    }
    reels.push(column);
  }
  return reels; // [[col1],[col2],[col3]...]
}

// Count scatter symbols
function countScatters(reels) {
  let count = 0;
  reels.forEach(col => col.forEach(s => { if (s === "Scatter") count++; }));
  return count;
}

// Calculate 1024 ways win
function calculateWaysWin(reels, bet) {
  let totalWin = 0;
  const firstReel = reels[0];

  // loop through each symbol in first reel
  firstReel.forEach(symbol => {
    if (symbol === "Scatter") return; // scatters don't pay via ways
    let multiplier = 1;
    let matchedReels = 1;

    for (let col = 1; col < reels.length; col++) {
      const reel = reels[col];
      const matches = reel.filter(s => s === symbol || s === "Wild").length;

      if (matches > 0) {
        matchedReels++;
        multiplier *= matches;
      } else {
        break;
      }
    }

    if (matchedReels >= 3) {
      // Example payout: bet × matchedReels × multiplier
      totalWin += bet * matchedReels * multiplier;
    }
  });

  return totalWin;
}

// Main play function
export function playSlot({ credit, bet, freeSpins }) {
  if (credit < bet && freeSpins <= 0) {
    return { error: "Not enough credit" };
  }

  // Deduct bet only if not a free spin
  const spinCost = freeSpins > 0 ? 0 : bet;
  const newCredit = credit - spinCost;

  // Spin reels
  const reels = spinReels();

  // Count scatters for free spins
  const scatterCount = countScatters(reels);
  let extraFreeSpins = 0;
  if (scatterCount >= 3) {
    extraFreeSpins = 8; // Example: 3+ scatters = 8 free spins
  }

  // Calculate ways win
  const win = calculateWaysWin(reels, bet);

  return {
    reels,
    win,
    credit: newCredit + win,
    bet,
    freeSpins: freeSpins > 0 ? freeSpins - 1 + extraFreeSpins : extraFreeSpins,
    scatterCount
  };
}
