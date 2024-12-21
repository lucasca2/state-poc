import { RenderCount } from "@/components/RenderCount/RenderCount";
import { Switch } from "@/components/Switch/Switch";

import styles from "./Container.module.scss";

type ContainerProps = {
  onToggle: () => void;
  enabled: boolean;
};

export const Container = ({ onToggle, enabled }: ContainerProps) => {
  return (
    <RenderCount className={styles.wrapper}>
      <Switch onToggle={onToggle} enabled={enabled} />
    </RenderCount>
  );
};

Container.displayName = "Container";
