import React, { FC } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface MainWrapperProps {
  children?: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }: MainWrapperProps) => {
  return (
    <main className={`min-h-screen px-6 md:px-12 py-8 ${inter.className}`}>
      {children}
    </main>
  );
};

export default MainWrapper;
