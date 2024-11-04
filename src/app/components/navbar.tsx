"use client";

import * as React from "react";
import Link from "next/link";

import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex h-20 w-full items-center justify-between rounded-lg bg-blue-500/10 px-2 backdrop-blur-md backdrop-brightness-90">
      <div></div>
      <div className="flex gap-8">
        <Link href="/">
          <Image
            alt=""
            className="w-52"
            width={208}
            height={52}
            src="/sine3a.png"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2"></div>
    </nav>
  );
}
