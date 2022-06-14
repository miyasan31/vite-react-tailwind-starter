import type { FC } from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title: string;
  description: string;
};

export const Head: FC<HeadProps> = ({ title, description }) => {
  return (
    <Helmet title={title} defaultTitle="React-Vite-TailwindCSS-Starter">
      <meta name="description" content={description} />
    </Helmet>
  );
};
