"use client";

import { Container } from "./components/Container/Container";
import { Title } from "./components/Title/Title";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./ContextPOC.module.scss";
import { SwitcherProvider } from "./providers/SwitcherProvider";

export const ContextPOC = () => {
  return (
    <SwitcherProvider>
      <RenderCount className={styles.wrapper}>
        <div className={styles.content}>
          <Title />
          <Container />
        </div>
      </RenderCount>
    </SwitcherProvider>
  );
};
