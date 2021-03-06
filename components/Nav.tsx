import React, { FC } from "react";
import Link from "next/link";

const Nav: FC = () => {
  return (
    <nav className="w-screen p-4">
      <div className="flex justify-between w-full">
        <span className="cursor-pointer">
          <Link href="/" passHref={true}>
            <p className="font-semibold"> Chainforest ⛓️🌴</p>
          </Link>
        </span>
        <div>
          <Link href="/about">
            <a className="mr-2">About</a>
          </Link>
          <Link href="/news">News</Link>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
