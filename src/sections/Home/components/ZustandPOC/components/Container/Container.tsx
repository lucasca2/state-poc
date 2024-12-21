import { RenderCount } from "@/components/RenderCount/RenderCount";
import { Switch } from "@/components/Switch/Switch";

import styles from "./Container.module.scss";
import { useSwitcherStore } from "../../stores/SwitcherStore";

export const Container = () => {
  const toggle = useSwitcherStore(state => state.toggle);
  const switcherValue = useSwitcherStore(state => state.switcherValue);

  return (
    <RenderCount className={styles.wrapper}>
      <Switch onToggle={toggle} enabled={switcherValue} />
    </RenderCount>
  );
};

Container.displayName = "Container";
