import { Switch } from "@/components/Switch/Switch";

import { useSwitcherStore } from "../../stores/useSwitcherStore";
import { RenderCount } from "@/components/RenderCount/RenderCount";

export const Container = () => {
  const toggle = useSwitcherStore((state) => state.toggle);
  const switcherValue = useSwitcherStore((state) => state.switcherValue);

  return (
    <RenderCount>
      <Switch onToggle={toggle} enabled={switcherValue} />
    </RenderCount>
  );
};

Container.displayName = "Container";
