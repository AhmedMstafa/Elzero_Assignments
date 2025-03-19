// Create Enums + Function Here

function getLevel(level: Game, num: number): Game {
  return level - num;
}

enum Game {
  Easy = 100,
  Medium = Game.Easy - 20,
  Hard = Game.Medium - Game.Easy / 2,
  Insane = getLevel(Game.Hard, 10),
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
