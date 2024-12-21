import { RenderCount } from "@/components/RenderCount/RenderCount";
import { Switch } from "@/components/Switch/Switch";

import styles from "./Container.module.scss";
import { useSwitcher } from "../../providers/SwitcherProvider";

export const Container = () => {
  const { switcherValue, toggle } = useSwitcher();
  
  return (
    <RenderCount className={styles.wrapper}>
      <Switch onToggle={toggle} enabled={switcherValue} />
    </RenderCount>
  );
};

Container.displayName = "Container";
