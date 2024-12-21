export const classNames = (
  ...classes: (string | undefined | Record<string, boolean>)[]
): string => {
  const concatedClasses = classes.reduce(
    (className, curr: string | undefined | Record<string, boolean>) => {
      if (!curr) return className;
      
      if (typeof curr === "string") {
        return `${className} ${curr}`;
      }

      return `${className} ${Object.entries(curr)
        .filter(([, value]) => !!value)
        .map(([key]) => key)
        .join(" ")}`;
    },
    ""
  ) as string;

  return concatedClasses.trim();
};
