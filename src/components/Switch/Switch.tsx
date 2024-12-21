import { classNames } from "@/utils/classNames";
import styles from "./Switch.module.scss";

type SwitchProps = {
  onToggle: () => void;
  enabled: boolean;
};

export const Switch = ({ onToggle, enabled }: SwitchProps) => {
  const trackClassName = classNames(styles.track, {
    [styles.track__enabled]: enabled,
  });

  const thumbClassName = classNames(styles.thumb, {
    [styles.thumb__enabled]: enabled,
  });

  return (
    <div className={trackClassName} onClick={onToggle}>
      <div className={thumbClassName} />
    </div>
  );
};
