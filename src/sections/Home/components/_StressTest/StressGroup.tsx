"use client";

import { useState } from "react";
import { StateStress } from "./components/StateStress/StateStress";
import { StateWithMemoStress } from "./components/StateWithMemoStress/StateWithMemoStress";
import { ZustandStress } from "./components/ZustandStress/ZustandStress";

import styles from "./StressGroup.module.scss";

type StressGroupProps = {
  countOfChildren: number;
};

export const StressGroup = ({ countOfChildren }: StressGroupProps) => {
  const [shouldShow, setShouldShow] = useState(false);


  if (shouldShow) {
    return (
      <>
        <StateStress countOfChildren={countOfChildren} />
        <StateWithMemoStress countOfChildren={countOfChildren} />
        <ZustandStress countOfChildren={countOfChildren} />
      </>
    );
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => setShouldShow(true)}>
        Iniciar testes
      </button>
    </div>
  );
};
