export const WORDS = [
  "AGENT",
  "WORLD",
  "ABOUT",
  "HEART",
  "WATER",
  "SIXTY",
  "BOARD",
  "MONTH",
  "MUSIC",
  "PARTY",
  "PIANO",
  "MOUTH",
  "WOMAN",
  "SUGAR",
  "AMBER",
  "DREAM",
  "LAUGH",
  "TIGER",
  "EARTH",
  "MONEY",
  "WORDS",
  "SMILE",
  "LEMON",
  "SOUTH",
  "AFTER",
  "STONE",
  "THING",
  "LIGHT",
  "STORY",
  "POWER",
  "TODAY",
  "RANGE",
  "PEARL",
  "VENOM",
  "PROXY",
  "ROUND",
  "HOVER",
  "CANDY",
  "ABOVE",
  "PHONE",
  "OTHER",
  "SMART",
  "BLACK",
  "MAGIC",
  "FRUIT",
  "RADIO",
  "ROYAL",
  "HONEY",
  "FLAKE",
  "SOUND",
];

export function checkGuess(word: string, guess: string) {
  const result: { letter; status }[] = [];
  const wordArray = word.split("");
  const guessArray = guess.split("");

  guessArray.forEach((str, index) => {
    result.push({ letter: str, status: "incorrect" });
  });

  if (wordArray.length != guessArray.length) return null;

  guessArray.map((char, index) => {
    if (word.includes(char)) {
      if (word.charAt(index) == char) {
        result[index].status = "correct";
      } else {
        result[index].status = "misplaced";
      }
    }
  });

  console.log(result);
  return result;
}
