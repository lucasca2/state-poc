"use client";

import styles from "./Title.module.scss";
import { useSwitcherStore } from "../../stores/useSwitcherStore";
import { RenderCount } from "@/components/RenderCount/RenderCount";

export const Title = () => {
  const title = useSwitcherStore((state) => state.title);

  return (
    <RenderCount>
      <h1 className={styles.title}>{title}</h1>
    </RenderCount>
  );
};

Title.displayName = "Title";
