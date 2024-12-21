import { classNames } from "@/utils/classNames";
import styles from "./Icon.module.scss";

import { Github } from "./icons/Github";
import { Linkedin } from "./icons/Linkedin";

const icons = {
  linkedin: Linkedin,
  github: Github,
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
};

export const Icon = ({ name, className: _className }: IconProps) => {
  const IconComponent = icons[name];

  const className = classNames(styles.icon, _className);

  return (
    <figure className={className}>
      <IconComponent />
    </figure>
  );
};
