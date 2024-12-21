"use client";

import { Container } from "./components/Container/Container";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./ZustandPOC.module.scss";

export const ZustandPOC = () => {
  return (
    <RenderCount className={styles.wrapper}>
      <div className={styles.content}>
        <Title />
        <Container />
      </div>
    </RenderCount>
  );
};
