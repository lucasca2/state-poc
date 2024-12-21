import { Avatar } from "@/components/Avatar/Avatar";

import styles from "./Header.module.scss";
import { Icon } from "../Icon/Icon";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://lucas.amaral.dev.br" target="_blank">
        <Avatar
          src={"/lucas.jpeg"}
          alt="Profile image"
          priority
          className={styles.avatar}
        />
      </a>

      <div className={styles.socialWrapper}>
        <a href="https://github.com/lucasca2/state-poc" target="_blank">
          <Icon name="github" />
        </a>
        <a href="https://www.linkedin.com/in/lucasca" target="_blank">
          <Icon name="linkedin" />
        </a>
      </div>
    </div>
  );
};
