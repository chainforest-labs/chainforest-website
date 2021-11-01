import React, { FC } from "react";

const PageContainer: FC = ({ children }) => {
  return (
    <div className="w-screen">
      <div className="mx-auto max-w-md">{children}</div>
    </div>
  );
};

export { PageContainer };
