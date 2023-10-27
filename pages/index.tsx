import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Guess from "../components/Guess/guess";

const NUM_OF_GUESSES_ALLOWED = 5;

export default function Home() {
  const [guess, setGuess] = useState("");

  const guessGrid: number[][] = new Array(6)
    .fill(0)
    .map((_, index) => new Array(5).fill(index));

  return (
    <div className={styles.container}>
      {guessGrid.map((row) => (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {row.map((item) => (
            <>
              <p>{item}</p>
              <Guess />
            </>
          ))}
        </div>
      ))}

      <form>
        <p>worlde:</p>
        <input
          maxLength={5}
          pattern="[A-Az]5"
          style={{ textTransform: "uppercase" }}
          onChange={(e) => {
            setGuess(e.target.value);
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
