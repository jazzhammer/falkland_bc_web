import {Knight} from "./knight";
import React from "react";

export function Square({ isBlack, text, children }: {
  isBlack: boolean,
  text: string,
  children: any
}) {
  const fill = isBlack ? 'black' : 'white'

  return (
    <div style={{ backgroundColor: fill }} className={"w-48 h-48 contents-center border-2 border-black"}>
      {children}
    </div>
  );
}