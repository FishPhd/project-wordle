import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [guess, setGuess] = useState("");
  return (
    <div className={styles.container}>
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
