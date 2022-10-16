import type { FC } from "react";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

/**
 * @package
 */
export const AppFallback: FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <p>エラーが発生しました。</p>
      <p>{error.message}</p>
      <button onClick={onReload}>再読み込み</button>
    </div>
  );
};

const onReload = () => {
  window.location.assign(window.location.origin);
};
