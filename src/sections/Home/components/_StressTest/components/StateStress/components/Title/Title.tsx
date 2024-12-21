"use client";
import { RenderCount } from "@/components/RenderCount/RenderCount";

import styles from "./Title.module.scss";

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <RenderCount className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
    </RenderCount>
  );
};

Title.displayName = "Title";
