import Image from "next/image";

import styles from "./Avatar.module.scss";
import { classNames } from "@/utils/classNames";

type AvatarProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export const Avatar = ({
  src,
  alt,
  priority,
  className: _className,
}: AvatarProps) => {
  const className = classNames(styles.image, _className);

  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={256}
      height={256}
      priority={priority}
    />
  );
};
