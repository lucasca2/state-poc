"use client";

import { useCallback, useState } from "react";
import { Container } from "./components/Container/Container";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./StateStress.module.scss";
import { Child } from "../../shared/Child/Child";

type StateStressProps = {
  countOfChildren: number;
};

export const StateStress = ({ countOfChildren }: StateStressProps) => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [title] = useState("Use State");

  const handleToggle = useCallback(() => {
    setSwitcherValue((prev) => !prev);
  }, []);

  return (
    <RenderCount className={styles.wrapper} id="State">
      <div className={styles.content}>
        <Title title={title} />
        <Container onToggle={handleToggle} enabled={switcherValue} />
        <div className={styles.array}>
          <span>List with {countOfChildren} items</span>
          {[...Array(countOfChildren)].map((_, i) => (
            <RenderCount key={i}>
              <Child value={(i + 1).toString()} />
            </RenderCount>
          ))}
        </div>
      </div>
    </RenderCount>
  );
};
