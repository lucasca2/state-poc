"use client";

import { useCallback, useMemo, useState } from "react";
import { Container } from "./components/Container/Container";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./StateWithMemoStress.module.scss";
import { MemoizedChild } from "../../shared/MemoizedChild/MemoizedChild";

type StateWithMemoStressProps = {
  countOfChildren: number;
};

export const StateWithMemoStress = ({
  countOfChildren,
}: StateWithMemoStressProps) => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [title] = useState("Use State & Memo");

  const handleToggle = useCallback(() => {
    setSwitcherValue((prev) => !prev);
  }, []);

  const array = useMemo(() => {
    return [...Array(countOfChildren)].map((_, i) => (
      <MemoizedChild key={i} value={(i + 1).toString()} />
    ));
  }, [countOfChildren]);

  return (
    <RenderCount className={styles.wrapper} id="State-Memo">
      <div className={styles.content}>
        <Title title={title} />
        <Container onToggle={handleToggle} enabled={switcherValue} />
        <div className={styles.array}>
          <span>List with {countOfChildren} items</span>
          {array}
        </div>
      </div>
    </RenderCount>
  );
};
