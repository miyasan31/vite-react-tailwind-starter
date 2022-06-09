import type { FC } from "react";

import type { ErrorFallbackProps } from "./ErrorFallbackProps";

const handleReload = () => {
  window.location.assign(window.location.origin);
};

export const AppFallback: FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <p>エラーが発生しました。</p>
      <p>{error.message}</p>
      <button onClick={handleReload}>再読み込み</button>
    </div>
  );
};
