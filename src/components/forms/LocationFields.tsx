"use client";

import { useState } from "react";
import { mexicoStates } from "@/data/mexico-locations";
import { SelectField } from "./SelectField";
import styles from "./location-fields.module.css";

const stateNames = mexicoStates.map((state) => state.name);

export function LocationFields() {
  const [state, setState] = useState("");
  const [municipality, setMunicipality] = useState("");

  const municipalities =
    mexicoStates.find((entry) => entry.name === state)?.municipalities ?? [];

  function handleStateChange(nextState: string) {
    setState(nextState);
    setMunicipality("");
  }

  return (
    <div className={styles.locationRow}>
      <SelectField
        id="state"
        label="Estado"
        name="state"
        onChange={handleStateChange}
        options={stateNames}
        placeholder="Estado"
        required
        size="compact"
        value={state}
      />

      <SelectField
        disabled={!state}
        id="municipality"
        label="Municipio"
        name="municipality"
        onChange={setMunicipality}
        options={municipalities}
        placeholder={state ? "Municipio" : "Elige estado"}
        required
        size="compact"
        value={municipality}
      />
    </div>
  );
}
