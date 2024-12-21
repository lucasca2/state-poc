"use client";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./Title.module.scss";
import { useSwitcherStore } from "../../stores/SwitcherStore";

export const Title = () => {
  const title = useSwitcherStore((state) => state.title);

  return (
    <RenderCount className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
    </RenderCount>
  );
};

Title.displayName = "Title";
