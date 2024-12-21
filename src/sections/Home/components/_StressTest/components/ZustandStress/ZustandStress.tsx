"use client";

import { Container } from "./components/Container/Container";
import { Title } from "./components/Title/Title";

import styles from "./ZustandStress.module.scss";
import { Child } from "../../shared/Child/Child";
import { RenderCount } from "@/components/RenderCount/RenderCount";

type ZustandStressProps = {
  countOfChildren: number;
};

export const ZustandStress = ({ countOfChildren }: ZustandStressProps) => {
  return (
    <RenderCount className={styles.wrapper} id="Zustand">
      <div className={styles.content}>
        <Title />
        <Container />
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
