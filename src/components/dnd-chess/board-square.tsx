import React from 'react'
import {Square} from "./square";
import {ItemTypes} from "./util";
import {useDrop} from "react-dnd";


export default function BoardSquare({ x, y, children, moveKnight }: {
  x: number,
  y: number,
  children: any,
  moveKnight: (x: number, y: number) => void
}) {
  const [{isOver}, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
    [x, y]
  )

  const black = (x + y) % 2 === 1
  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: 96,
        height: 96,
      }}
    >
      <Square isBlack={black} text={''}>{children}</Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 48,
            width: 48,
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div>
  );
}