import React, { FC } from "react";

const PageContainer: FC = ({ children }) => {
  return <div className="flex justify-center max-w-md">{children}</div>;
};

export { PageContainer };
