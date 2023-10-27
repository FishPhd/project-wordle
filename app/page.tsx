"use client";
import "../styles/global.css";
import { useState } from "react";
import Guess from "../components/Guess/guess";

const NUM_OF_GUESSES_ALLOWED = 5;

export default function Home() {
  const [guess, setGuess] = useState("");

  const guessGrid: number[][] = new Array(6)
    .fill(0)
    .map((_, index) => new Array(5).fill(index));

  return (
    <div className="mx-auto max-w-3xl">
      {guessGrid.map((row, index) => (
        <div
          className="text-center"
          key={`guessGrid ${row}-${index}`}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {row.map((item, idx) => (
            <div key={`guessGrid ${item}-${idx}`}>
              <p>{item}</p>
              <Guess />
            </div>
          ))}
        </div>
      ))}

      <form
        className="flex pt-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>wordle:</p>
        <input
          maxLength={5}
          pattern="[A-Za-z]{5}"
          className="border-2 uppercase"
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
        />
        <button
          onClick={() => {
            console.log(guess);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
