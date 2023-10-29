"use client";
import "../styles/global.css";
import { useEffect, useState } from "react";
import Guess from "../components/Guess/guess";
import { WORDS, checkGuess } from "../utils/utils";
import { randomInt } from "crypto";

const NUM_OF_GUESSES_ALLOWED = 5;

export default function Home() {
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    setCurrentWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }, []);

  const [guess, setGuess] = useState<string>("");
  const [gameEnd, setGameEnd] = useState<"Won" | "Lost" | "Playing">("Playing");
  const [pastGuess, addPastGuess] = useState<{ letter; status }[][]>([]);

  const guessGrid: number[][] = new Array(NUM_OF_GUESSES_ALLOWED)
    .fill(0)
    .map((_, index) => new Array(5).fill(index));

  return (
    <div className="mx-auto max-w-3xl">
      {gameEnd != "Playing" ? (
        <div
          className={` p-5 ${
            gameEnd === "Won" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {gameEnd}
        </div>
      ) : (
        <></>
      )}
      <div className="flex">
        {guessGrid.map((row, index) => (
          <div className="text-center" key={`guessGrid ${row}-${index}`}>
            {row.map((item, idx) => (
              <div key={`guessGrid ${item}-${idx}`}>
                <Guess
                  value={
                    pastGuess.length > idx ? pastGuess[idx][index].letter : ""
                  }
                  status={
                    pastGuess.length > idx ? pastGuess[idx][index].status : ""
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <form
        className="flex pt-4"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(guess);
          const result = checkGuess(currentWord, guess);
          addPastGuess([...pastGuess, result]);

          if (guess == currentWord) {
            setGameEnd("Won");
          } else if (pastGuess.length == NUM_OF_GUESSES_ALLOWED - 1) {
            setGameEnd("Lost");
          }
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">wordle:</label>
        <input
          id="guess-input"
          maxLength={5}
          minLength={5}
          pattern="[A-Za-z]{5}"
          className="border-2 uppercase"
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
          value={guess}
        />
        <button
          className="rounded-md bg-green-300 p-1 ml-10 border-2 border-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
