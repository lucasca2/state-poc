import { RenderCount } from "@/components/RenderCount/RenderCount";
import React from "react";

export const MemoizedChild = React.memo(({ value }: { value: string }) => {
  return <RenderCount>{value}</RenderCount>;
});

MemoizedChild.displayName = "MemoizedChild";
