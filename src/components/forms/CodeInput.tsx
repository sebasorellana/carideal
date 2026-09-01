"use client";

import { type ChangeEvent, type KeyboardEvent, useRef, useState } from "react";
import styles from "./code-input.module.css";

type CodeInputProps = {
  length?: number;
  name: string;
};

export function CodeInput({ length = 6, name }: CodeInputProps) {
  const [digits, setDigits] = useState<string[]>(() => Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  function handleChange(index: number, event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\D/g, "");

    if (!value) {
      setDigits((previous) => {
        const next = [...previous];
        next[index] = "";
        return next;
      });
      return;
    }

    setDigits((previous) => {
      const next = [...previous];
      let cursor = index;
      for (const char of value) {
        if (cursor >= length) break;
        next[cursor] = char;
        cursor += 1;
      }
      return next;
    });

    inputRefs.current[Math.min(index + value.length, length - 1)]?.focus();
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  return (
    <div aria-label="Código de acceso" className={styles.codeRow} role="group">
      {digits.map((digit, index) => (
        <input
          aria-label={`Dígito ${index + 1}`}
          autoComplete={index === 0 ? "one-time-code" : "off"}
          className={styles.codeInput}
          inputMode="numeric"
          key={index}
          onChange={(event) => handleChange(index, event)}
          onFocus={(event) => event.target.select()}
          onKeyDown={(event) => handleKeyDown(index, event)}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          type="text"
          value={digit}
        />
      ))}
      <input name={name} type="hidden" value={digits.join("")} />
    </div>
  );
}
