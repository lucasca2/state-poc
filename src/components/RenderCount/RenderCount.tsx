"use client";
import { useRef, useEffect, Profiler } from "react";
import styles from "./RenderCount.module.scss";
import { classNames } from "@/utils/classNames";

type RenderCountProps = {
  id?: string;
  children?: React.ReactNode;
  className?: string;
};

export const RenderCount = ({
  id,
  children,
  className: _className,
}: RenderCountProps) => {
  const isClient = useRef(false);
  const renderCount = useRef(1);
  const renderTimeSpan = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isClient.current) {
      isClient.current = true;
    }
  }, []);

  if (isClient.current) {
    renderCount.current += 1;
  }

  const className = classNames(styles.wrapper, _className);

  if (id) {
    return (
      <Profiler
        id={id}
        onRender={(id, phase, actualDuration) => {
          if (renderTimeSpan.current) {
            renderTimeSpan.current.textContent = `${phase}: ${actualDuration.toFixed(
              2
            )} ms`;
          }
        }}
      >
        <div className={className} translate="no">
          {children}
          <div className={styles.textWrapper}>
            <span className={styles.text} ref={renderTimeSpan}>
              Mounting
            </span>
            <span className={styles.text}>
              Rendered: {renderCount.current} times
            </span>
          </div>
        </div>
      </Profiler>
    );
  }

  return (
    <div className={className} translate="no">
      {children}
      <div className={styles.textWrapper}>
        <span className={styles.text}>
          Rendered: {renderCount.current} times
        </span>
      </div>
    </div>
  );
};
