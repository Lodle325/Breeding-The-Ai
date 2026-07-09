// ============================================================
// FITNESS.JS -- Tell the AI what good driving looks like
//
// THIS IS THE ONLY FILE YOU NEED TO MODIFY.
//
// computeFitness() is called every frame for every car.
// It returns a number. Higher = better driver.
// Cars with the highest scores survive into the next generation
// and their brains are used to produce the next round of cars.
//
// Right now every car scores 0, so no car is better than any
// other and the AI cannot improve. Your job is to write rules
// that reward good driving and punish bad driving.
//
// ============================================================
// WHAT YOU HAVE ACCESS TO
// ============================================================
//
//   car.progress    -- how far around the track the car has gone
//                      measured in centerline steps (~242 per lap)
//                      a higher number means further around the track
//
//   car.laps        -- number of fully completed laps
//
//   car.timeAlive   -- how many frames the car has been running
//                      (60 frames = 1 second)
//
//   car.avgSpeed    -- average speed over the car's lifetime
//                      (0 to 5, where 5 is the maximum)
//
//   car.grassTime   -- total frames spent on grass
//                      (lower is better -- grass slows the car down)
//
//   car.alive       -- whether the car is still going
//                      (false if it drove off track for too long)
//
// ============================================================
// WHERE TO START
// ============================================================
//
// Step 1: Make cars score based on how far they travel.
//         Change "return 0" to "return car.progress"
//         Run training and watch what happens.
//
// Step 2: Add a big bonus for completing a full lap.
//         Try: return car.progress + car.laps * 300;
//
// Step 3: Add a penalty for time spent on grass so the AI
//         learns to stay on track.
//         Try: return car.progress + car.laps * 300 - car.grassTime * 1.5;
//
// Step 4: Run the experiments below and record what changes.
//
// ============================================================
// EXPERIMENTS TO TRY AFTER YOUR FIRST WORKING VERSION
// ============================================================
//
//   -- Increase the lap bonus (e.g. 300 → 1000). Does training converge faster?
//   -- Remove the grass penalty entirely. Does the AI start cutting corners?
//   -- Add a speed reward: + car.avgSpeed * some_weight.
//      Does the AI drive faster or does it break something?
//   -- Try returning ONLY car.laps * 300 (no progress, just laps).
//      Can the AI still learn without step-by-step feedback?
//   -- What is the minimum fitness function that still produces a working driver?
//
// ============================================================

function computeFitness(car) {
  // YOUR CODE GOES HERE
  // Replace this with your fitness rules.

  return 0;
}