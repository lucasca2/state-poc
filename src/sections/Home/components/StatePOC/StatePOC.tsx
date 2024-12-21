"use client";

import { useCallback, useState } from "react";
import { Container } from "./components/Container/Container";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./StatePOC.module.scss";

export const StatePOC = () => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [title] = useState("State");

  const handleToggle = useCallback(() => {
    setSwitcherValue((prev) => !prev);
  }, []);

  return (
    <RenderCount className={styles.wrapper}>
      <div className={styles.content}>
        <Title title={title} />
        <Container onToggle={handleToggle} enabled={switcherValue} />
      </div>
    </RenderCount>
  );
};
