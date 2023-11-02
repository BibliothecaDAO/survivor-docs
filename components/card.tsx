import { useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";

export function BeastCard() {
  return (
    <div className="beast-card">
      <Image src="/kraken.png" alt="Kraken" width={200} height={200} />
      <div className="beast-info">
        <p>Number: 51</p>
        <p>Type: Brute</p>
        <p>Name: Kraken</p>
        <p>Tier: 1</p>
      </div>
    </div>
  );
}
