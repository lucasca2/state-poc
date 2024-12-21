"use client";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./Title.module.scss";
import { useSwitcher } from "../../providers/SwitcherProvider";

export const Title = () => {
  const { title } = useSwitcher();

  return (
    <RenderCount className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
    </RenderCount>
  );
};

Title.displayName = "Title";
