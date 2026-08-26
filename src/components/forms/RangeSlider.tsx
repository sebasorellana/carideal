"use client";

import type { CSSProperties, ChangeEvent } from "react";
import { useId, useState } from "react";
import styles from "./range-slider.module.css";

type RangeSliderProps = {
  format?: "plain" | "kilometers" | "currency";
  label: string;
  maximum: number;
  minimum: number;
  name: string;
  step?: number;
};

type SingleRangeSliderProps = {
  label: string;
  maximum: number;
  minimum: number;
  name: string;
  onChange: (value: number) => void;
  step?: number;
  value: number;
  valueDescription?: string;
};

type RangeStyle = CSSProperties & {
  "--range-end": string;
  "--range-start": string;
};

const TRACK_START = 10;
const TRACK_END = 90;
const numberFormatter = new Intl.NumberFormat("en-US");

export function RangeSlider({
  format = "plain",
  label,
  maximum,
  minimum,
  name,
  step = 1,
}: RangeSliderProps) {
  const labelId = useId();
  const [lowerValue, setLowerValue] = useState(minimum);
  const [upperValue, setUpperValue] = useState(maximum);

  const valueToPosition = (value: number) => {
    const progress = (value - minimum) / (maximum - minimum);

    return TRACK_START + progress * (TRACK_END - TRACK_START);
  };

  const formatValue = (value: number) => {
    if (format === "plain") return String(value);

    const formattedNumber = numberFormatter.format(value);

    if (format === "kilometers") return `${formattedNumber} km`;
    if (format === "currency") return `$${formattedNumber}`;
    return String(value);
  };
  const rangeStyle: RangeStyle = {
    "--range-end": `${valueToPosition(upperValue)}%`,
    "--range-start": `${valueToPosition(lowerValue)}%`,
  };

  const handleLowerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Math.min(Number(event.target.value), upperValue - step);
    setLowerValue(Math.max(minimum, nextValue));
  };

  const handleUpperChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Math.max(Number(event.target.value), lowerValue + step);
    setUpperValue(Math.min(maximum, nextValue));
  };

  return (
    <div
      aria-labelledby={labelId}
      className={styles.range}
      role="group"
      style={rangeStyle}
    >
      <h3 className={styles.label} id={labelId}>
        {label}
      </h3>
      <div className={styles.values} aria-live="polite">
        <span>{formatValue(lowerValue)}</span>
        <span>{formatValue(upperValue)}</span>
      </div>
      <div className={styles.track}>
        <input
          aria-label={`${label}: mínimo`}
          aria-valuetext={formatValue(lowerValue)}
          className={styles.input}
          max={maximum}
          min={minimum}
          name={`${name}Minimum`}
          onChange={handleLowerChange}
          step={step}
          type="range"
          value={lowerValue}
        />
        <input
          aria-label={`${label}: máximo`}
          aria-valuetext={formatValue(upperValue)}
          className={styles.input}
          max={maximum}
          min={minimum}
          name={`${name}Maximum`}
          onChange={handleUpperChange}
          step={step}
          type="range"
          value={upperValue}
        />
      </div>
    </div>
  );
}

export function SingleRangeSlider({
  label,
  maximum,
  minimum,
  name,
  onChange,
  step = 1,
  value,
  valueDescription,
}: SingleRangeSliderProps) {
  const labelId = useId();
  const progress = ((value - minimum) / (maximum - minimum)) * 100;
  const rangeStyle: RangeStyle = {
    "--range-end": `${progress}%`,
    "--range-start": "0%",
  };

  return (
    <div
      aria-labelledby={labelId}
      className={styles.range}
      role="group"
      style={rangeStyle}
    >
      <h3 className={styles.label} id={labelId}>
        {label}
        {valueDescription && (
          <span className={styles.valueDescription}> {valueDescription}</span>
        )}
      </h3>
      <div className={`${styles.track} ${styles.singleTrack}`}>
        <input
          aria-label={label}
          aria-valuetext={valueDescription}
          className={`${styles.input} ${styles.singleInput}`}
          max={maximum}
          min={minimum}
          name={name}
          onChange={(event) => onChange(Number(event.target.value))}
          step={step}
          type="range"
          value={value}
        />
      </div>
    </div>
  );
}
